import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import GlobalStyle from "../styles/globalStyle";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <meta name="title" content="A simple blog" />
      <title key="title">A simple blog</title>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
