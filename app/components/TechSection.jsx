import React from "react";
import { Icon } from "@iconify/react";

const TechSection = () => {
  const list = [
    {
      name: "React",
      description: "For building fast, interactive UIs",
      icon: <Icon icon="skill-icons:react-light" width="40" height="40" />,
    },
    {
      name: "Next.js",
      description: "React framework with routing & SSR",
      icon: <Icon icon="skill-icons:nextjs-light"width="40" height="40" />,
    },
    {
      name: "TypeScript",
      description: "Typed JavaScript for safer code",
      icon: <Icon icon="skill-icons:typescript"width="40" height="40" />,
    },
     {
      name: "Node.js",
      description: "React framework with routing & SSR",
      icon: <Icon icon="skill-icons:nodejs-dark" width="40" height="40" />,
    },
     {
      name: ". NET",
      description: "React framework with routing & SSR",
      icon: <Icon icon="skill-icons:dotnet" width="40" height="40" />,
    },
     {
      name: "Express.js",
      description: "Typed JavaScript for safer code",
      icon: <Icon icon="skill-icons:expressjs-dark" width="40" height="40" />
    },
  ];

  const frontEnd = list.slice(0,3)
  const backEnd = list.slice(3,6)
  return (
    <>
      <div className="tech-section container max-w-[880px]">
        <div className="tech-section-header content-style flex flex-col">
          <p className="text-xs text-[#00000059] font-semibold">TECH STACK</p>
          <h3>What I Use</h3>
        </div>
        <div className="tech-section-content mt-12 flex flex-col">
          <div className="row1 flex items-start gap-8">
            <div className="left basis-1/2 ">
              <p className="tech-header">Frontend</p>
              <div className="tech-list">
                {frontEnd.map((item, index) => (
                  <div className="tech-blocks" key={index}>
                    <div className="tech-icon-wrapper">
                        {item.icon}
                    </div>
                    <div className="tech-block-content">
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right basis-1/2">
              <p className="tech-header">Backend</p>
              <div className="tech-list">
                {backEnd.map((item, index) => (
                  <div className="tech-blocks" key={index}>
                    <div className="tech-icon-wrapper">
                        {item.icon}
                    </div>
                    <div className="tech-block-content">
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default TechSection;
