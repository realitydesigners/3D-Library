"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const Stars = dynamic<{}>(
  () => import("../app/components/Stars").then((mod) => mod.default),
  { ssr: false }
);

const Logo = dynamic<{}>(
  () => import("../app/components/Logo").then((mod) => mod.default),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="bg-black">
      <div className="fixed w-screen h-screen z-0">
        {" "}
        <Stars />
      </div>
      <div className="flex w-screen h-screen relative">
        <div className="w-full h-full absolute z-0">
          <Logo />
        </div>
      </div>
      <div className="flex w-screen h-screen justify-center items-center ">
        <div className="flex bg-gray-600 w-4/5 h-4/5 relative z-10"></div>
      </div>
      <div className="flex w-screen h-screen justify-center items-center ">
        <div className="flex bg-gray-400 w-4/5 h-4/5 relative z-10"></div>
      </div>
    </main>
  );
}
