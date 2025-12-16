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
      image: "images/avatar4.avif",
    },
    {
      number: "20+",
      description: "Enterprise Applications Contributed To",
      image: "images/avatar4.avif",
    },
  ];
  return (
    <>
      <div className="achievements container max-w-[880px] content-style">
        <div className="achievements-header flex flex-col items-center">
          <p className="text-xs text-[#00000059] font-semibold">ACHIEVEMENTS</p>
          <h2>Little Big Wins</h2>
        </div>
        <div className="achievements-content">
          <div className="achievements-list md:flex flex-col gap-5"> 
                {
                    achivementsList.map((item, index) => (
                        <div className="achievements-block bg-[#f7f7f7] ">
                            {item.number}
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
