import PostList from "../components/PostList";
import Layout from "../components/Layout";
import axios from "axios";
import { useAppDispatch } from "../hooks/hooks";
import { Post } from "../types/post";
import { add } from "../features/posts/postsSlice";

const App: React.FC<{ posts: any }> = ({ posts }) => {
  const dispatch = useAppDispatch();
  dispatch(add(posts as Post[]));
  return (
    <Layout>
      <PostList />
    </Layout>
  );
};

export default App;

const TEN_MINUTES = 60 * 10;

export const getStaticProps = async () => {
  const posts: any = await axios
    .get(process.env["NEXT_PUBLIC_API"] as string)
    .then((r) => r.data)
    .catch((e: Error) => {
      throw new Error(`Error while fetching data...\n${e.message}`);
    });
  return {
    props: {
      posts,
    },
    revalidate: TEN_MINUTES,
  };
};
