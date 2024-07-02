import React from "react";
import video from "../videos/video-1.mp4";

function About() {
  console.log("Video source:", video); // Check the video path

  return (
    <div className="about-sec">
      <div className="about flex w-[100%] justify-between">
        <div className="about-text w-[36%]">
          <h1>About Us</h1>
          <p>
            Welcome to <span className="brand">Caffé</span> , your go-to
            destination for exceptional coffee experiences both online and
            offline. Our journey began with a simple yet passionate mission: to
            bring the world's finest coffee directly to your cup, whether you
            enjoy it in the comfort of your home or at one of our cozy coffee
            shops.
          </p>
          <div>
          <button className="text-button">Read More</button>

          </div>
        </div>
        <div className="about-video w-[611px] h-[343.69px]">
          <video
            autoPlay
            muted
            loop
            className="rounded-[10px] w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default About;
