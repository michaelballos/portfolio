import React, { useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import { AppProps } from 'next/app';
import {
  getCookie,
  setCookies,
} from 'cookies-next';
import Head from 'next/head';
import {
  ColorScheme,
  MantineProvider,
  ColorSchemeProvider,
  createStyles,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import Header from '../components/molecules/Header/Header';
import '../styles/globals.css';

const useStyles = createStyles(() => ({
  pageMargin: {
    marginTop: 56,
  },
}));

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { classes } = useStyles();
  const {
    Component,
    pageProps,
  } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    // eslint-disable-next-line react/destructuring-assignment
    props.colorScheme,
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark'
      ? 'light'
      : 'dark'
    );
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  const headerLinks = [
    {
      link: '/home',
      label: 'Home',
    },
    {
      link: '/about',
      label: 'About',
    },
  ];
  return (
    <>
      <Head>
        <title>Michael Ballos</title>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
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
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
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
