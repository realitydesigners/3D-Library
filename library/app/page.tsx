"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const Stars = dynamic<{}>(
  () => import("../app/components/Stars").then((mod) => mod.default),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <div className="absolute w-screen h-screen z-0">
        {" "}
        <Stars />
      </div>
      <div className=" flex flex-vertical bg-black w-screen h-auto ">
        <h1 className="text-4xl font-mono uppercase">Home</h1>
      </div>
    </main>
  );
}
