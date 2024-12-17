import React from "react";
import calvin from "../../assets/images/homepage/logo/calvin.png";
import zara from "../../assets/images/homepage/logo/zara.png";
import gucci from "../../assets/images/homepage/logo/gucci.png";
import prada from "../../assets/images/homepage/logo/prada.png";
import versace from "../../assets/images/homepage/logo/versace.png";

const logos = [
  { src: calvin, alt: "Calvin Klein" },
  { src: zara, alt: "Zara" },
  { src: gucci, alt: "Gucci" },
  { src: prada, alt: "Prada" },
  { src: versace, alt: "Versace" },
];

const CustomersBrands = () => {
  return (
    <div className="flex justify-center bg-black">
      <div className="bg-inherit max-w-screen-xl w-full flex justify-between items-center py-7 animate-marquee space-x-16">
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.src} />
        ))}
      </div>
    </div>
  );
};

export default CustomersBrands;
