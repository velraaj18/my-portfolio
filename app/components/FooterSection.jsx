import React from "react";

const FooterSection = () => {
  return (
    <>
      <div className="container max-w-[880px] content-style">
        <div className="footer-header flex flex-col items-start">
          <p className="text-xs text-[#00000059] font-semibold">GET IN TOUCH</p>
          <h2>Let's Connect</h2>
        </div>
        <div className="footer-content flex flex-col mt-7 gap-3">
          <div className="footerrow1 flex flex-col md:flex-row gap-3">
            <div className="w-full md:basis-1/2 left rounded-4xl bg-[#f7f7f7] flex flex-col items-center justify-center md:px-14 py-8">
              <p className="text-xs text-[#00000059] font-semibold">Connect</p>
              <h3>Velraaj30@gmail.com</h3>
            </div>
            <div className="w-full md:basis-1/2 right bg-[#f7f7f7] rounded-4xl flex flex-col items-center justify-center md:px-14 py-8">
              <p className="text-xs text-[#00000059] font-semibold">Connect</p>
              <h3>Velraaj30@gmail.com</h3>
            </div>
          </div>
          <div className="footerrow2 flex flex-col md:flex-row gap-3">
            <div className="w-full md:basis-1/3 left rounded-4xl bg-[#f7f7f7]">
              <div className="footer-content flex flex-col items-center aspect-[1] justify-between p-6">
                <div className="footer-text flex flex-col items-center justify-start">
                  <p className="text-sm font-semibold">Hi I'm Raaj.</p>
                  <p className="text-sm text-[#00000059] font-semibold">
                    I press buttons and
                    <br /> interfaces happen
                  </p>
                </div>
                <div>
                  <img
                    src="/images/avatar2.avif"
                    alt=""
                    className="md:max-w-40 h-auto aspect-[1]"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:basis-2/3 right rounded-4xl bg-[#f7f7f7] p-8 md:flex flex-col justify-between">
                <div className="flex gap-5">
                    <div className="basis-1/3">
                        <div className="flex flex-col items-start">
                            <p className="text-sm font-semibold text-[#00000059]">Menu</p>
                            <div className="flex flex-col gap-2 mt-3">
                                <h3><a href="">Home</a></h3>
                                <h3><a href="">Works</a></h3>
                                <h3><a href="">About</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3">
                        <div className="flex flex-col items-start">
                                <p className="text-sm font-semibold text-[#00000059]">Follow</p>
                                <div className="flex flex-col gap-2 mt-3">
                                <h3><a href="">Home</a></h3>
                                <h3><a href="">Works</a></h3>
                                <h3><a href="">About</a></h3>
                            </div>
                            </div>
                        </div>
                    <div className="basis-1/3">
                        <div className="flex flex-col items-start">
                            <p className="text-sm font-semibold text-[#00000059]">Explore</p>
                            <div className="flex flex-col gap-2 mt-3">
                                <h3><a href="">Home</a></h3>
                                <h3><a href="">Works</a></h3>
                                <h3><a href="">About</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm text-[#00000059] font-semibold">© 2024, Bluren</p>
                    <p className="text-sm text-[#00000059] font-semibold">Back to Top</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
