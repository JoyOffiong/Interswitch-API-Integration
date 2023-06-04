import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import hero from "./images/sean-pollock-PhYq704ffdA-unsplash.jpg";
import hero2 from "./images/mailchimp-lsdA8QpWN_A-unsplash.jpg";

function LandingPage() {
  const bgImages = [hero, hero2];
  const [bg, setBg] = useState(0);
  // console.log(bg)

  useEffect(() => {
    const interval = setInterval(() => {
      setBg((prev) => (prev + 1) % bgImages.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [bgImages.length]);

  const currentImg = bgImages[bg];

  return (
    <div className="flex flex-col h-full">
      <div className="relative ">
        {" "}
        <img
          src={`${currentImg}`}
          className="object-cover h-[700px] w-full transition"
          alt=""
        />
      </div>
      <div className="absolute top-0 ">
        <div className=" flex items-center  justify-between tablet:py-5 phone:pl-8 tablet:px-20 phone:py-3 w-screen z-30 bg-white shadow-md">
          <div className="flex items-center justify-between w-2/5 py-10 px-20">
            <h3 className="text-3xl font-bold">UFinance!</h3>
            <p className=" hidden md:block text-gray-500 font-bold">Features</p>
            <p className=" hidden md:block text-gray-500 font-bold">Pricing</p>
            <p className=" hidden md:block text-gray-500 font-bold">
              Resources
            </p>
          </div>

          <div className="flex items-center justify-between w-1/5">
            <div className="laptop:hidden tablet:block">
              <BiMenuAltLeft className="text-4xl" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center z-30 px-20 mt-100  w-screen">
          <div className=" mx-auto z-30 flex mt-48 justify-center items-center gap-20">
            <h3 className="text-[24px] md:text-[48px] lg:text-[64px]  text-green-700 z-30 font-bold">
              Welcome to UFinance!, make all Payments with Ease
            </h3>
          </div>
          <div className="mt-20 mx-auto z-30 flex justify-center items-center gap-20">
            <Link to="/firstPage">
              <button className="bg-green-700 p-2 font-bold rounded-md">Payments</button>
            </Link>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
