import React, { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { FormspreeProvider } from "@formspree/react";
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
import Footer from "../components/molecules/Footer/Footer";
import "../styles/globals.css";
import '../styles/BlogCard.scss';
import '../styles/HeroButton.css';
import Layout from "../components/molecules/Layout/Layout";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
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
        <meta
          name="description"
          content="Michael Ballos is a Software Engineer based in Kansas City, MO. He is a full stack developer with a passion for building beautiful, responsive websites and applications."
        />
       <link
         rel="apple-touch-icon"
         sizes="180x180"
         href="/apple-touch-icon.png"
       />
       <link
         rel="icon"
         type="image/png"
         sizes="32x32"
         href="/favicon-32x32.png"
       />
       <link
         rel="icon"
         type="image/png"
         sizes="16x16"
         href="/favicon-16x16.png"
       />
       <link
         rel="manifest"
         href="/manifest.json"
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
          <FormspreeProvider project="michael-ballos">
          <NotificationsProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </NotificationsProvider>
          </FormspreeProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
