import type { Metadata } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import { HouseList } from "@/components";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>
      <div className="min-h-[1800px]">
        <Banner />
        <HouseList />
      </div>
    </main>
  );
}
