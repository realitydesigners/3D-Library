"use client";

import Head from "next/head";
import dynamic from "next/dynamic";

const ReactScene = dynamic<{}>(
  () => import("../components/ReactScene").then((mod) => mod.default),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Library</title>
        <meta name="description" content="My website description"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex w-screen h-screen bg-black relative">
          <div className="w-full h-full absolute">
            <ReactScene />
          </div>
        </div>
      </main>
    </>
  );
}
