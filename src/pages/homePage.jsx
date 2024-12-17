import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/images/homepage/bannerImg.png";
import ShopItemBlock from "../components/shop/shopItemBlock";
import CustomersBrands from "../components/home/customersBrands";
import { shopItems } from "../info/shopInfo";
import dressStyle1 from "../assets/images/homepage/Frame 1.png";
import dressStyle2 from "../assets/images/homepage/Frame 2.png";
import dressStyle3 from "../assets/images/homepage/Frame 4.png";
import dressStyle4 from "../assets/images/homepage/Frame 3.png";

const HomePage = () => {
  return (
    <React.Fragment>
      {/* banner-section */}
      <div className="flex bg-gray-100 justify-center">
        <div className="bg-inherit max-w-screen-xl w-full grid grid-cols-2">
          <div className="flex-1 flex items-center">
            <div>
              <p className="uppercase text-6xl font-black">
                find clothes <br /> that matches <br /> your style
              </p>
              <p className="text-base my-6 font-primaryRegular">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <div className="py-4">
                <Link
                  to={"/shop"}
                  className="capitalize bg-black text-white text-base py-4 px-8 rounded-full font-primaryRegular hover:bg-white hover:text-black hover:border-2 hover:border-black hover:font-primaryBold"
                >
                  shop now
                </Link>
              </div>
              <div className="flex my-6 justify-between w-full">
                <div>
                  <p className="text-4xl font-primaryMedium">200+</p>
                  <p className="text-base capitalize font-primaryRegular">
                    international brands
                  </p>
                </div>
                <div className="border-x border-slate-600" />
                <div>
                  <p className="text-4xl font-primaryMedium">2000+</p>
                  <p className="text-base capitalize font-primaryRegular">
                    High-quality products
                  </p>
                </div>
                <div className="border-x border-slate-600" />
                <div>
                  <p className="text-4xl font-primaryMedium">30000+</p>
                  <p className="text-base capitalize font-primaryRegular">
                    happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={banner} alt="banner image" className="" />
          </div>
        </div>
      </div>
      {/* customer-brands-section */}
      <CustomersBrands />
      {/* new-arrivals-section */}
      <div className="flex justify-center">
        <div className="bg-inherit max-w-screen-xl w-full py-12 flex flex-col items-center">
          <p className="text-5xl uppercase font-primaryBold text-center my-4">
            new arrivals
          </p>
          <div className="grid grid-cols-4 w-full my-8 gap-8">
            {shopItems
              .sort((a, b) => b.price - a.price)
              .slice(0, 4)
              .map((item) => (
                <ShopItemBlock
                  id={item.id}
                  photo={item.photo}
                  name={item.name}
                  ratings={item.ratings}
                  price={item.price}
                  markedPrice={item.markedPrice}
                  category={item.category}
                />
              ))}
          </div>
          <Link
            to={"/shop"}
            className="text-base capitalize border-2 rounded-full py-2 px-10 w-fit"
          >
            view all
          </Link>
        </div>
      </div>
      {/* divider */}
      <div>
        <hr className="border-t-2 border-solid max-w-screen-xl m-auto" />
      </div>
      {/* top-selling-section */}
      <div className="flex justify-center">
        <div className="bg-inherit max-w-screen-xl w-full py-12 flex flex-col items-center">
          <p className="text-5xl uppercase font-primaryBold text-center my-4">
            top selling
          </p>
          <div className="grid grid-cols-4 w-full my-8 gap-8">
            {shopItems
              .sort((a, b) => b.ratings - a.ratings)
              .slice(0, 4)
              .map((item) => (
                <ShopItemBlock
                  id={item.id}
                  photo={item.photo}
                  name={item.name}
                  ratings={item.ratings}
                  price={item.price}
                  markedPrice={item.markedPrice}
                  category={item.category}
                />
              ))}
          </div>
          <Link
            to={"/shop"}
            className="text-base capitalize border-2 rounded-full py-2 px-10 w-fit"
          >
            view all
          </Link>
        </div>
      </div>
      {/* browes-dress-style-section */}
      <div className="bg-grayLightWeight max-w-screen-xl m-auto rounded-3xl p-14">
        <p className="text-center text-4xl font-primaryBold uppercase pb-12">
          browse by dress style
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-6">
          <div
            className=" rounded-2xl p-6 h-72 bg-cover"
            style={{ backgroundImage: `url(${dressStyle1})` }}
          >
            <p className="text-3xl capitalize font-primaryRegular">casual</p>
          </div>
          <div
            className="col-span-2 rounded-2xl p-6 h-72 bg-cover"
            style={{ backgroundImage: `url(${dressStyle2})` }}
          >
            <p className="text-3xl capitalize font-primaryRegular">formal</p>
          </div>
          <div
            className="col-span-2 rounded-2xl p-6 h-72 bg-cover"
            style={{ backgroundImage: `url(${dressStyle3})` }}
          >
            <p className="text-3xl capitalize font-primaryRegular">party</p>
          </div>
          <div
            className="rounded-2xl p-6 h-72 bg-cover"
            style={{ backgroundImage: `url(${dressStyle4})` }}
          >
            <p className="text-3xl capitalize font-primaryRegular">gym</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
