"use client";
import { useEffect, useRef, useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

const GET_POSTS = gql`
  query GetPOSTS {
    allPosts {
      id
      title
      views
    }
  }
`;
import Layout from "./components/Layout";
import Posts from "./components/Posts";

export default function Home() {
  const [post, setPost] = useState([]);
  const { loading, error, data } = useQuery(GET_POSTS, {
    fetchPolicy: "no-cache",
  });

  console.log({ loading });
  useEffect(() => {
    console.log("visited", data);
    setPost(data?.allPosts);
  }, [data]);
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-screen-lg mx-auto">
        <Posts posts={post} />
      </main>
    </Layout>
  );
}
