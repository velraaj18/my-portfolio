import React from "react";
import Marquee from "react-fast-marquee";
import { Icon } from "@iconify/react";

const HeroMarquee = () => {
  const skills = [
    {
      name: "C#",
      icon: <Icon icon="devicon:csharp" />,
    },
    {
      name: ".NET",
      icon: <Icon icon="devicon:dot-net" width="40" height="40" />,
    },
    {
      name: "Web API",
      icon: <Icon icon="devicon:fastapi" width="128" height="128" />,
    },
    {
      name: "2 years of experience",
      icon: <Icon icon="devicon:csharp" />,
    },
    {
      name: "C#",
      icon: <Icon icon="devicon:csharp" />,
    },
    {
      name: "C#",
      icon: <Icon icon="devicon:csharp" />,
    },
    {
      name: "C#",
      icon: <Icon icon="devicon:csharp" />,
    },
    {
      name: "C#",
      icon: <Icon icon="devicon:csharp" />,
    },
    {
      name: "C#",
      icon: <Icon icon="devicon:csharp" />,
    },
    {
      name: "C#",
      icon: <Icon icon="devicon:csharp" />,
    },
  ];
  return (
    <>
      <Marquee
        speed={40}
        direction="left"
        gradient
        gradientWidth={240}
        className="h-32"
      >
        {skills.map((item, index) => (
          <div className="flex px-6 py-6 bg-gray-800 text-white rounded-2xl mx-2">
            {item.icon}
            <span
              key={index}
              className=""
            >
              {item.name}
            </span>
          </div>
        ))}
      </Marquee>

      <Marquee
        speed={40}
        direction="right"
        gradient
        gradientWidth={240}
        className="h-32"
      >
        {skills.map((item, index) => (
          <div className="flex px-6 py-6 bg-gray-800 text-white rounded-full mx-2">
            {item.icon}
            <span
              key={index}
              className=""
            >
              {item.name}
            </span>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default HeroMarquee;
