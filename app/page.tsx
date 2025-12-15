import React from "react";
import NavBar from "./components/NavBar";
import Profile from "./components/ProfileSection";
import Spacer from "./components/Spacer";
import HeroMarquee from "./components/Marquee";
import AboutSection from "./components/AboutSection";

const HomePage = () => {
  return (
    <>
      <main className="pt-28">
        {/* <NavBar /> */}
        <div>
          <Profile/>
          <Spacer/>
          <HeroMarquee/>
          <Spacer/>
          <Spacer/>
          <AboutSection/>
          <Spacer/>
        </div>
      </main>
    </>
  );
};

export default HomePage;
