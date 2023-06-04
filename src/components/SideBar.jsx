import React from "react";
import image from "./images/annie-spratt-IT6aov1ScW0-unsplash.jpg";

function SideBar() {
  return (
    <div className="w-[50%]">
      <div className="w-100% h-[100vh] hidden md:block">
        <img
          src={image}
          width="100%"
          height='100%'
          className="object-contain"
          alt=""
        />
      </div>
    </div>
  );
}

export default SideBar;
