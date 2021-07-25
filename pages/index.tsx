import styled from "styled-components";
import PostList from "../components/PostList";
import Layout from "../components/Layout";

const NavBar: React.FC = () => {
  return (
    <nav>
      <h1>A simple blog</h1>
    </nav>
  );
};

const Footer: React.FC = () => {
  return <footer>2021</footer>;
};

export default function Home() {
  // axios
  //.get("https://simple-blog-api.crew.red/posts")
  //.then((res) => console.log(res.data));
  //const dispatch = useAppDispatch();
  //useEffect(() => {
  //dispatch(add(posts as PostType[]));
  //}, []);

  return (
    <Layout>
      <PostList />
    </Layout>
  );
}
