import React from "react";
import FooterColumn from "./footerColumn";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import footerIcon1 from "../../assets/images/footer/Badge.png";
import footerIcon2 from "../../assets/images/footer/Badge-1.png";
import footerIcon3 from "../../assets/images/footer/Badge-2.png";
import footerIcon4 from "../../assets/images/footer/Badge-3.png";
import footerIcon5 from "../../assets/images/footer/Badge-4.png";

const Footer = () => {
  return (
    <React.Fragment>
      {/* space-box */}
      <div className="h-10" />
      <div className="flex bg-grayLight justify-center mt-24">
        <div className="bg-inherit max-w-screen-xl w-full">
          {/* subscription-note */}
          <div className="w-full bg-black flex justify-between items-center py-12 px-24 rounded-3xl -mt-24">
            <div className="flex-1">
              <p className="text-white font-primaryBold text-5xl">
                stay upto date about <br /> our latest offers
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-1 items-center">
              <div className="flex items-center w-9/12 py-3 px-6 rounded-full bg-white">
                <FaRegEnvelope size={20} color="gray" />
                <input
                  type="text"
                  className="outline-none w-full ml-2 font-primaryRegular"
                  placeholder="Enter your email address"
                />
              </div>
              <button className="bg-white w-9/12 text-base font-primaryRegular py-3 rounded-full">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
          {/* navigate-links-and-info */}
          <div className="grid grid-cols-5 gap-4 my-4">
            <div className="m-2">
              <p className="text-3xl font-primaryBold my-4">shop.co</p>
              <p className="text-sm font-primaryRegular">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex gap-5 my-6">
                <FaFacebook size={28} />
                <FaXTwitter size={28} /> <FaInstagram size={28} />
                <FaYoutube size={28} />
              </div>
            </div>
            <FooterColumn
              title={"company"}
              links={["about", "features", "works", "career"]}
            />
            <FooterColumn
              title={"help"}
              links={[
                "customer support",
                "delivery details",
                "terms & conditions",
                "privacy policy",
              ]}
            />
            <FooterColumn
              title={"faq"}
              links={["account", "manage deliveries", "order", "payments"]}
            />
            <FooterColumn
              title={"resources"}
              links={[
                "free ebooks",
                "development tutorial",
                "how to blog",
                "youtube playlist",
              ]}
            />
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="bg-grayLight">
        <hr className="border-t-2 border-solid max-w-screen-xl m-auto border-grayLightWeight" />
      </div>
      {/* bottom-footer */}
      <div className="flex bg-grayLight justify-center items-center">
        <div className="max-w-screen-xl w-full flex justify-between items-center py-6">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex gap-2">
            <img src={footerIcon1} alt="Icons" />
            <img src={footerIcon2} alt="Icons" />
            <img src={footerIcon3} alt="Icons" />
            <img src={footerIcon4} alt="Icons" />
            <img src={footerIcon5} alt="Icons" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
