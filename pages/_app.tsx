import React, { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { AppProps } from "next/app";
import {
  getCookie,
  setCookies,
} from "cookies-next";
import Head from "next/head";
import {
  ColorScheme,
  MantineProvider,
  ColorSchemeProvider,
  createStyles,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import Header from "../components/molecules/Header/Header";
import "../styles/globals.css";
import '../styles/BlogCard.scss';

const useStyles = createStyles(() => ({
  pageMargin: {
    marginTop: 56,
  },
}));

const headerLinks = [
  {
    link: "/home",
    label: 'Home',
  },
  {
    link: "/blogs",
    label: "Blogs",
  },
];

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { classes } = useStyles();
  const {
    Component,
    pageProps,
  } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    'dark',
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === "dark"
        ? "light"
        : "dark"
    );
    setColorScheme(nextColorScheme);
    setCookies("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <>
      <Head>
        <title>Michael Ballos</title>
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <Header links={headerLinks} />
            <div className={classes.pageMargin}>
              <Component {...pageProps} />
            </div>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export const getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});