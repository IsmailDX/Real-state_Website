import type { Metadata } from "next";
import Head from "next/head";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <div className=" min-h-[1800px]">
        <Banner />
      </div>
    </main>
  );
}
