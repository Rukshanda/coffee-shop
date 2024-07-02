import React from "react"; 
import gal6 from "../images/gal-6.jpg";
import gal8 from "../images/gal-8.jpg";
import gal9 from "../images/gal-9.jpg";
import gal10 from "../images/gal-10.jpg"; 
import gal13 from "../images/gal-19.png";
import gal14 from "../images/gal-20.jpg";
import gal16 from "../images/gal-16.jpg";
import gal17 from "../images/gal-17.png";
import gal15 from "../images/gal-15.jpg";
import gal7 from "../images/gal-7.jpg";
import gal3 from "../images/gal-3.jpg";
import gal2 from "../images/gal-2.jpg";

const images = [
   { id: 2, src: gal6, alt: "Image 2" },
  { id: 3, src: gal8, alt: "Image 3" },
  { id: 4, src: gal9, alt: "Image 4" },
  { id: 5, src: gal10, alt: "Image 5" },
  { id: 7, src: gal13, alt: "Image 7" },
  { id: 8, src: gal14, alt: "Image 8" },
  { id: 9, src: gal16, alt: "Image 9" },
  { id: 10, src: gal17, alt: "Image 10" },
  { id: 11, src: gal15, alt: "Image 11" },
  { id: 12, src: gal7, alt: "Image 12" },
  { id: 13, src: gal3, alt: "Image 13" },
  { id: 14, src: gal2, alt: "Image 14" },
];

function Gallery() {
  return (
    <div className="gallery-sec">
        <h1>
            Our Collection
        </h1>
      <div className="gallery">
        <div className="gallery-box">
          <div className="gallery-items">
            {images.map((image) => (
              <div className="g-items" key={image.id}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
