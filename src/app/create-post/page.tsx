"use client";

import { CreatePost } from "../components/CreatePost";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-screen-lg mx-auto">
        <CreatePost />
      </main>
    </Layout>
  );
}
