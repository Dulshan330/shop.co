import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { shopItems } from "../info/shopInfo";
import Error404Page from "./error404Page";
import { FaRegStar, FaStar, FaMinus, FaPlus } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

const SingleShopItemPage = () => {
  const { id } = useParams();
  const selectedItem = shopItems.find((item) => item.id === id);
  const [cartItem, setCartItem] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [addedWishlist, setAddedWishlist] = useState(false);

  const ratingsIcons = () => {
    const totalStars = 5;
    const filledStars = Array(selectedItem.ratings).fill(
      <FaStar className="text-yellow-400" size={18} />
    );
    const emptyStars = Array(totalStars - selectedItem.ratings).fill(
      <FaRegStar className="text-yellow-400" size={18} />
    );
    return (
      <div className="flex items-center gap-3 my-2">
        <div className="flex">{filledStars.concat(emptyStars)}</div>
        <p className="text-base font-primaryMedium">{selectedItem.ratings}/5</p>
      </div>
    );
  };

  const discount = () => {
    const rate =
      ((selectedItem.markedPrice - selectedItem.price) /
        selectedItem.markedPrice) *
      100;
    return rate.toFixed(0);
  };

  if (!selectedItem) {
    return <Error404Page />;
  }

  return (
    <React.Fragment>
      {/* Breadcrumb */}
      <div className="m-auto max-w-screen-xl my-4">
        <p className="flex items-center gap-2 capitalize font-primaryRegular">
          <Link to={"/"}>home</Link>
          <IoIosArrowForward />
          <Link to={"/shop"}>shop</Link>
          <IoIosArrowForward />
          <Link to={`/shop/${id}`}>{selectedItem.name}</Link>
        </p>
      </div>
      {/* item-view */}
      <div className="flex m-auto max-w-screen-xl gap-4">
        <div className="flex flex-1">
          <div className="flex flex-col w-1/3 justify-between items-center gap-3">
            <img
              src={selectedItem.photo}
              className="w-36 h-auto rounded-2xl"
              alt="item"
            />
            <img
              src={selectedItem.photo}
              className="w-36 h-auto rounded-2xl"
              alt="item"
            />
            <img
              src={selectedItem.photo}
              className="w-36 h-auto rounded-2xl"
              alt="item"
            />
          </div>
          <div className="flex w-2/3">
            <img
              src={selectedItem.photo}
              alt="item"
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
        {/* description */}
        <div className="flex flex-1 flex-col p-2">
          <p className="text-4xl font-primaryBold">{selectedItem.name}</p>
          {ratingsIcons()}
          <div className="flex gap-4 items-center">
            <p className="text-2xl font-primaryRegular my-2">
              ${selectedItem.price}
            </p>
            {selectedItem.markedPrice && (
              <>
                <p className="text-2xl font-primaryRegular my-2 text-gray-400 line-through">
                  ${selectedItem.markedPrice}
                </p>
                <p className="text-xs text-red-700 bg-red-200 py-2 px-4 rounded-full">
                  -{discount()}%
                </p>
              </>
            )}
          </div>
          <div>
            <p className="text-base font-primaryRegular">
              {selectedItem.description}
            </p>
          </div>
          {/* divider */}
          <hr className="my-2" />
          <span className="text-base font-primaryRegular capitalize">
            select color
          </span>
          {/* color-selection */}
          <div className="flex gap-3 my-2 ">
            {selectedItem.colors.map((color, index) => (
              <button
                key={index}
                className={`flex justify-center items-center w-10 h-10 rounded-full ${color} border-gray-600 border-2`}
                onClick={() => setSelectedColor(color)}
              >
                {selectedColor === color && <TiTick />}
              </button>
            ))}
          </div>
          {/* divider */}
          <hr className="my-2" />
          <span className="text-base font-primaryRegular capitalize">
            select size
          </span>
          {/* size-selection */}
          <div className="gap-1 my-2">
            {selectedItem.sizes.map((size, index) => (
              <button
                key={index}
                className={`text-base font-primaryRegular py-2 px-4 rounded-full capitalize m-1 w-fit ${
                  selectedSize === size ? `bg-black text-white` : "bg-gray-200"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          {/* divider */}
          <hr className="my-2" />
          {/* cart-button */}
          <div className="flex gap-3">
            <div className=" flex w-1/3 bg-gray-300 rounded-full justify-evenly items-center">
              <FaMinus
                className="hover:cursor-pointer"
                onClick={() => setCartItem(cartItem > 1 ? cartItem - 1 : 1)}
              />
              <p className="text-lg font-primaryRegular">{cartItem}</p>
              <FaPlus
                className="hover:cursor-pointer"
                onClick={() => setCartItem(cartItem < 10 ? cartItem + 1 : 10)}
              />
            </div>
            <button className="w-2/3 bg-black text-white py-2 rounded-full font-primaryRegular">
              Add to Cart
            </button>
          </div>
          <div className="my-2 flex justify-end">
            <button
              className="w-2/3 text-black py-2 flex justify-center items-center gap-2 font-primaryRegular hover:font-primaryMedium"
              onClick={() => setAddedWishlist(!addedWishlist)}
            >
              {addedWishlist == true ? (
                <>
                  <IoMdHeart /> <span>Remove from Wishlist</span>
                </>
              ) : (
                <>
                  <IoIosHeartEmpty /> <span>Add to Wishlist</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* space-box */}
      <div className="h-10" />
    </React.Fragment>
  );
};

export default SingleShopItemPage;
