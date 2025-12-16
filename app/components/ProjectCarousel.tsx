"use client";

import React from "react";
import { Carousel } from "primereact/carousel";

type CarouselItem = {
  name: string;
  description: string;
  btnColor: string;
  image: string;
};

const ProjectCarousel = () => {
  const items: CarouselItem[] = [
    {
      name: "Service Mac",
      description:
        "Fast, elegant, and conversion-focused, it’s built to boost bookings and build trust.",
      btnColor: "bg-red-500",
      image: "/images/Movement.png",
    },
  ];

  const itemTemplate = (item: CarouselItem) => {
    return (
      <div className="project-carousal container max-w-[880px] bg-[#f7f7f7] rounded-4xl content-style">
        <div className="project-carousal-content pl-8 pt-8 flex h-full gap-5 ">
          <div className="basis-2/5 flex flex-col pb-8 justify-between">
            <div className="bg-white flex flex-col">
                <p>“More bookings. Less hassle. The site does its job perfectly and looks great doing it.”</p>
            </div>
            <div className="flex flex-col gap-3 items-start justify-end">
              <h3>{item.name}</h3>
              <span>{item.description}</span>
              <a
                href="#"
                className={`${item.btnColor} px-6 py-3 text-white rounded-full w-fit`}
              >
                Read more
              </a>
            </div>
          </div>

          <div className="basis-3/5">
            <img src={`${item.image}`} alt="" className="h-full object-cover"/>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      value={items}
      itemTemplate={itemTemplate}
      numVisible={1}
      numScroll={1}
      circular
      autoplayInterval={4000}
      className="relative"
      pt={{
        previousButton: {
          className: "carousel-arrow left-arrow",
          onClick: (e) => e.stopPropagation(),
        },
        nextButton: {
          className: "carousel-arrow right-arrow",
          onClick: (e) => e.stopPropagation(),
        },

        previousButtonIcon: {
          className: "custom-prev-icon",
        },
        nextButtonIcon: {
          className: "custom-next-icon",
        },
      }}
    />
  );
};

export default ProjectCarousel;
