import React from "react";
import Marquee from "react-fast-marquee";
import { Icon } from "@iconify/react";

const HeroMarquee = () => {
   const skills = [
    { name: "Full Stack Dev", icon: <Icon icon="devicon:dot-net" width="50" height="50" />, bg: "#FFE4EF", text : "#EF88AD" },
    { name: "2+ Years as Dev", icon: <Icon icon="fluent-emoji-flat:two-oclock" width="50" height="50" />, bg: "#CBF3BB" , text : "#628141" },
    { name: "2 Projects", icon: <Icon icon="fluent-emoji-flat:green-book" width="50" height="50" />, bg: "#F7F6D3", text: "#DCA06D" },
    { name: "15+ Learning Projects", icon: <Icon icon="fluent-emoji-flat:open-book" width="50" height="50" />, bg: "#C2E2FA", text: "#4B70F5" },
    { name: "25+ Live Websites", icon: <Icon icon="fluent-emoji-flat:desktop-computer" width="50" height="50" />, bg: "#FFD6BA", text: "#F25912" },
    { name: "Backend Expert", icon: <Icon icon="fluent-emoji-flat:pushpin" width="50" height="50" />, bg: "#CDC1FF", text: "#4F1787" },
    { name: "API Builder", icon: <Icon icon="fluent-emoji-flat:books" width="50" height="50" />, bg: "#BFECFF", text: "#4B70F5" },
    { name: "UI Focused", icon: <Icon icon="noto:fountain-pen" width="50" height="50" />, bg: "#FDACAC" , text: "#F7374F"},
  ];

  const firstRow = skills.slice(0, 4);
  const secondRow = skills.slice(4, 8);

  return (
    <>
      <Marquee
        speed={80}
        direction="left"
        gradient
        gradientWidth={240}
        pauseOnHover
        className="h-32"
      >
        {firstRow.map((item, index) => (
          <div key={index} className={`flex px-5 py-3 items-center justify-center gap-4 text-white rounded-4xl mx-2 content-style`}
          style={{backgroundColor : item.bg}}>
            {item.icon}
            <h2
              style={{color: item.text}}
            >
              {item.name}
            </h2>
          </div>
        ))}
      </Marquee>

      <Marquee
        speed={80}
        direction="right"
        gradient
        gradientWidth={240}
        pauseOnHover
        className="h-32"
      >
        {secondRow.map((item, index) => (
          <div key={index} className="flex px-5 py-3 bg-gray-800 text-white items-center gap-4 justify-center rounded-4xl mx-2 content-style" style={{backgroundColor : item.bg}}>
            {item.icon}
            <h2              
              style={{color : item.text}}
            >
              {item.name}
            </h2>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default HeroMarquee;
