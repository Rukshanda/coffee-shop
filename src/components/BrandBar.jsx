import React from "react";
import brand1 from "../images/brand-1.png";
import brand2 from "../images/brand-2.png";
import brand3 from "../images/brand-3.png";
import brand4 from "../images/brand-4.png";

import brand5 from "../images/brand-5.png";
import brand6 from "../images/brand-6.png";
import brand7 from "../images/brand-7.png";

function BrandBar() {
  return (
    <div className="brand-sec pt-[30px] pb-[30px] pr-[40px] pl-[40px]">
      <div className="brand ">
        <div className="brand-bar w-[100%]">
          <ul className=" flex flex-row items-cener justify-between">
            <li className="w-[150px] h-[100px]">
              <img src={brand1} alt="Brand Logo" className="w-full h-full"/>
            </li>
            <li className="w-[150px] h-[100px]">
              <img src={brand2} alt="Brand Logo" className="w-full h-full" />
            </li>
            <li className="w-[150px] h-[100px]">
              <img src={brand3} alt="Brand Logo"  className="w-full h-full"/>
            </li>
            <li className="w-[150px] h-[100px]">
              <img src={brand4} alt="Brand Logo" className="w-full h-full"/>
            </li>
            <li className="w-[150px] h-[100px]">
              <img src={brand5} alt="Brand Logo" className="w-full h-full"/>
            </li>
            <li className="w-[150px] h-[100px]">
              <img src={brand6} alt="Brand Logo" className="w-full h-full"/>
            </li>
            <li className="w-[150px] h-[100px]">
              <img src={brand7} alt="Brand Logo" className="w-full h-full"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BrandBar;
