import Head from 'next/head';
import Intro from '../components/intro';
import React from "react";
import AboutMe from "../components/aboutme";
import TechSkills from "../components/techskills";
import Timeline from "../components/timeline";
import Projects from "../components/projects";
import Contact from "../components/contact";
import MyFooter from "../components/myfooter";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vlad Dragomir: Portfolio</title>
        <meta name="description" content="Portfolio page for full stack developer Vlad Dragomir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro/>

	  <AboutMe/>

	  <TechSkills/>

	  <Timeline/>

	  <Projects/>

	  <Contact/>

      <hr/>

	  <MyFooter/>

    </div>
  );
};