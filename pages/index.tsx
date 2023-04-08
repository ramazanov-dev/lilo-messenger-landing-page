import { useState } from "react";
import Head from "next/head";
import { FC } from "react";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { MobileApp } from "@/components/MobileApp/MobileApp";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Footer } from "@/components/Footer/Footer";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Lilo Messenger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper">
        <div className="wrapper__body">
          <Header />
          <Hero />
          <MobileApp />
          <AboutMe />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;