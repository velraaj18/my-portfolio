import React from "react";
import { DM_Mono } from "next/font/google";
import Spacer from "./Spacer";

const dM_Mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  fallback: ["sans-serif"], // optional but recommended
});

const AboutSection = () => {
  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Hi, I'm Raaj</title>
</head>
<body>
</body>
</html>`;
  return (
    <>
      <div className="about flex flex-col gap-2 container max-w-[880px]">
        <div className="firstRow flex flex-col md:flex-row items-stretch gap-2 content-style">
          <div className="left w-full md:basis-1/2 bg-[#f7f7f7] rounded-4xl p-6">
            <h2 className="max-w-[320px] leading-10">
              Full-stack developer{" "}
              <span className="">with a love for clean UI and fast apps</span>{" "}
            </h2>
            <div className="avatar-wrapper flex items-center justify-center p-12">
              <img
                src="/images/avatar2.avif"
                alt=""
                className="max-w-[220px]"
              />
            </div>
          </div>
          <div className="right w-full md:basis-1/2 flex flex-col gap-2">
            <div className="basis-1/2 bg-[#f7f7f7] rounded-4xl">
              <div className="px-5 pt-5">
                <span className="text-[#00000080] text-xs">Based In</span>
                <h3>TamilNadu, India</h3>
              </div>
              <div className="location-images-wrapper pt-7 pb-10">
                <img
                  src="/images/locationS.svg"
                  alt=""
                  className="location-small"
                />
                <img
                  src="/images/locationS.svg"
                  alt=""
                  className="location-small"
                />
                <img
                  src="/images/locationS.svg"
                  alt=""
                  className="location-small"
                />
                <img
                  src="/images/locationB.svg"
                  alt=""
                  className="location-big"
                />
                <img
                  src="/images/locationS.svg"
                  alt=""
                  className="location-small"
                />
                <img
                  src="/images/locationS.svg"
                  alt=""
                  className="location-small"
                />
                <img
                  src="/images/locationS.svg"
                  alt=""
                  className="location-small"
                />
              </div>
            </div>
            <div className="basis-1/2 bg-[#f7f7f7] rounded-4xl">
              <div className="px-5 pt-5">
                <span className="text-[#00000080] text-xs">Coding Since</span>
                <h3>April 2024</h3>
              </div>
              <div className="code-interface p-5">
                <div className="code-interface-header">
                  <div className="round-bullets-dark"></div>
                  <div className="round-bullets"></div>
                  <div className="round-bullets"></div>
                </div>
                <div className="code-interface-content m-0">
                  <div>
                    <pre className={`${dM_Mono.className} code-interface-text`}>
                      <code>{htmlCode}</code>
                    </pre>
                  </div>
                </div>
                <div className="code-interface-overlay"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="secondRow flex flex-col content-style md:flex-row items-stretch justify-center gap-2 ">
          <div className="left w-full md:basis-1/3 bg-[#f7f7f7] rounded-4xl px-7 py-8">
            <div className="content flex flex-col items-start justify-between aspect-auto md:aspect-[1]">
              <div className="pill rounded-4xl">
                <span className="text-[#00000080] text-xs">What I Do</span>
              </div>
              <h3>Focused on fast builds, clean code, and smart design</h3>
            </div>
          </div>
          <div className="right w-full md:basis-2/3 flex items-end bg-[#f7f7f7] rounded-4xl px-5 py-6 md:px-7 md:pt-8">
            <div className="growth-card-content flex flex-col items-start justify-between pb-7 aspect-auto md:aspect-[1] gap-12 md:gap-0">
              <div className="pill rounded-4xl">
                <span className="text-[#00000080] text-xs">
                  Always Learning
                </span>
              </div>
              <h3>Exploring Next.js & Rust</h3>
            </div>
            <div className="growth-card-image-wrapper max-w-[250px] h-[250px]">
              <img
                src="/images/avatar3.avif"
                alt="avatar3"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
