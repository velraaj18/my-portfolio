import React from "react";
import NavBar from "./components/NavBar";
import Profile from "./components/ProfileSection";
import Spacer from "./components/Spacer";
import HeroMarquee from "./components/Marquee";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import TechSection from "./components/TechSection";
import AchievementsSection from "./components/AchievementsSection";

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
          <Spacer/>
          <Spacer/>
          <TechSection/>
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <ProjectSection />
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <AchievementsSection/>
          <Spacer/>
          <Spacer/>
          <Spacer/>
        </div>
      </main>
    </>
  );
};

export default HomePage;
