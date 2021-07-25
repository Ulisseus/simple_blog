import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useAppDispatch } from "../hooks/hooks";
import { Post as PostType } from "../types/post";
import { posts } from "../testData/posts";
import { add } from "../features/posts/postsSlice";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
 // const dispatch = useAppDispatch();
  //useEffect(() => {
    //dispatch(add(posts as PostType[]));
  //}, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
