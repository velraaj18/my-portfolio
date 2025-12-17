import React from "react";

const AchievementsSection = () => {
  const achivementsList = [
    {
      number: "20+",
      description: "Enterprise Applications Contributed To",
      image: "images/avatar4.avif",
    },
    {
      number: "20+",
      description: "Enterprise Applications Contributed To",
      image: "images/avatar5.avif",
    },
    {
      number: "20+",
      description: "Enterprise Applications Contributed To",
      image: "images/avatar6.avif",
    },
  ];
  return (
    <>
      <div className="achievements container max-w-[880px] content-style">
        <div className="achievements-header flex flex-col items-start">
          <p className="text-xs text-[#00000059] font-semibold">ACHIEVEMENTS</p>
          <h2>Little Big Wins</h2>
        </div>
        <div className="achievements-content md: mt-10">
          <div className="achievements-list md:flex flex-col gap-5"> 
                {
                    achivementsList.map((item, index) => (
                      <div
                        key={index}
                        className={`achievements-block flex bg-[#f7f7f7] gap-20 rounded-4xl ${index % 2 !== 0 ? "flex-row-reverse" : ""}`} >
                        <div className="image-wrapper">
                          <img src={item.image} alt="" className="aspect-[1] h-full object-cover"/>
                        </div>

                        <div className="achievements-block-content flex flex-col items-center justify-center">
                          <h1>{item.number}</h1>
                          <p className="text-lg text-[#00000059] font-semibold">{item.description}</p>
                        </div>
                      </div>
                    ))
                }
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementsSection;
