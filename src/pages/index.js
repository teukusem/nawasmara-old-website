import Head from "next/head";
import { data } from "@/constants/ariefnabila";
import LandingPage from "@/components/landing-page";

export default function Home() {
  const { title } = data;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <LandingPage />
    </>
  );
}
