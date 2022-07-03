import React, {
  useEffect,
  useState
} from "react";
import Header from "../components/molecules/Header/Header";
import Router from "next/router";

export default function Home() {
  useEffect(() => {
    const {pathname} = Router
    pathname == '/'
      ? Router.push('/home')
      : 'Page not found'
  }, []);
}