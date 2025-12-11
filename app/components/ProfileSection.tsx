import React from "react";

const Profile = () => {
  return (
    <>
      <div className="profile container flex flex-col items-center justify-center ">
        <div className="profileAvatar bg-[#f7f7f7] rounded-3xl">
          <div className="profileAvatarWrap p-2.5">
            <img
              src="/images/ProfileAvatar.avif"
              alt="profileAvatar"
              className="w-20 md:w-[104px] h-auto"
            />
          </div>
        </div>
        <div className="aboutMe content-style">
          <h1 className="text-center">Hi, I am Velraaj. <br />
          <span className="text-[#D3DAD9]"> Junior .NET Developer </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
