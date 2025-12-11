import React from "react";
import NavBar from "./components/NavBar";
import Profile from "./components/ProfileSection";
import Spacer from "./components/Spacer";
import HeroMarquee from "./components/Marquee";

const HomePage = () => {
  return (
    <>
      <main className="pt-28">
        {/* <NavBar /> */}
        <div>
          <Profile/>
          <Spacer/>
          <HeroMarquee/>
        </div>
      </main>
    </>
  );
};

export default HomePage;
