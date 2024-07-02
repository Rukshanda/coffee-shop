import React from "react";
import FooterLogo from "./FooterLogo";
import person1 from "../images/person-1.jpg"
import person2 from "../images/person-2.jpg"
import person3 from "../images/person-3.jpg"
import person4 from "../images/person-4.jpg"

import {
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer-sec">
      <div className="footer flex flex-row justify-around items-center w-[100%]">
        <div className="footer-logo flex flex-col justify-center w-[35%]">
          <div className="footer-logo--img">
            <FooterLogo width="130px"/>
          </div>
          <div className="footer-logo--text">
            Awaken your senses with our artisan brews. Freshly roasted,
            passionately crafted. Join the coffee revolution today!
          </div>

          <div className="footer-social">
          <div className="social-icons">
            <ul className="flex flex-row w-[80%] items-center justify-between text-[1.5rem] mb-[10px] font-[800]" >
              <li className="iconBg">
                <FaFacebookF />
              </li>
              <li className="iconBg">
                <FaInstagram />
              </li>
              <li className="iconBg">
                <FaPinterestP />
              </li>
              <li className="iconBg">
                <FaXTwitter />
              </li>
            </ul>
          </div>
          <div className="card-icons">
            <ul className="flex flex-row w-[80%] items-center justify-between text-[1.5rem] font-[800]">
              <li className="iconBg">
                <FaCcPaypal />
              </li>
              <li className="iconBg">
                <FaCcDiscover />
              </li>
              <li className="iconBg">
                <FaCcMastercard />
              </li>
              <li className="iconBg">
                <FaCcVisa />
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="footer-info w-[15%] mt-[100px]">
          <h3 className="tag-txt">Informtion</h3>
          <ul className="flex flex-col w-[100%] justify-center">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>

          
        </div>
        <div className="footer-contributer w-[15%] mt-[100px]">
          <ul className="flex flex-col  justify-center">
          <h3 className="tag-txt">Contirbuters</h3>

            <li className="flex flex-row items-center justify-between w-[180px] p-[4px] mt-[4px]">
              <span className="contributer-img">
                <img src={person1} alt="" className="w-[50px] h-[50px] rounded-full"/>
              </span>
              <span className="contirbuter-name">Jonas smith</span>
            </li>
            <li className="flex flex-row items-center justify-between w-[180px] p-[4px] mt-[4px]">
              <span className="contributer-img">
                <img src={person2} alt="" className="w-[50px] h-[50px] rounded-full"/>
              </span>
              <span className="contirbuter-name">Olivia Rodger</span>
            </li>
            <li className="flex flex-row items-center justify-between w-[180px] p-[4px] mt-[4px]">
              <span className="contributer-img">
                <img src={person3} alt="" className="w-[50px] h-[50px] rounded-full"/>
              </span >
              <span className="contirbuter-name">Thomas Rover</span>
            </li>
            <li className="flex flex-row items-center justify-between w-[180px] p-[4px] mt-[4px]">
              <span className="contributer-img">
                <img src={person4} alt="" className="w-[50px] h-[50px] rounded-full"/>
              </span>
              <span className="contirbuter-name">Vince Simon</span>
            </li>
          </ul>
        </div>
      <div className="footer-locations w-[15%] mt-[80px]">
        <div>
        <h3 className="tag-txt">Locations</h3>

        <ul className="flex flex-col justify-center">
          <li className="loc-text">Lahore</li>
          <li className="loc-text">Karachi</li>
          <li className="loc-text">Islamabad</li>
          <li className="loc-text">Multan</li>
          <li className="loc-text">Quetta</li>
        </ul>
        </div>
     
      </div>
       
      </div>
    </div>
  );
}

export default Footer;
