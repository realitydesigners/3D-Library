"use client";

import Head from "next/head";
import dynamic from "next/dynamic";

const ReactScene = dynamic<{}>(
  () => import("../components/ReactScene").then((mod) => mod.default),
  { ssr: false }
);

const Stars = dynamic<{}>(
  () => import("../components/Stars").then((mod) => mod.default),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>REALITY DESIGNERS | Library</title>
        <meta name="description" content="My website description"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="absolute w-screen h-screen z-0">
          {" "}
          <Stars />
        </div>

        <div className="flex w-screen h-screen relative">
          <div className="w-full h-full absolute z-10">
            <ReactScene />
          </div>
        </div>
      </main>
    </>
  );
}
