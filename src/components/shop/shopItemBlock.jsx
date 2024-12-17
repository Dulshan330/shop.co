import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShopItemBlock = ({
  photo,
  id,
  name,
  ratings = 0,
  price,
  markedPrice,
  category,
  sizes,
  colors,
}) => {
  const ratingsIcons = () => {
    const totalStars = 5;
    const filledStars = Array(ratings).fill(
      <FaStar className="text-yellow-400" size={18} />
    );
    const emptyStars = Array(totalStars - ratings).fill(
      <FaRegStar className="text-yellow-400" size={18} />
    );
    return (
      <div className="flex items-center gap-3 my-2">
        <div className="flex">{filledStars.concat(emptyStars)}</div>
        <p className="text-base font-primaryRegular">{ratings}/5</p>
      </div>
    );
  };

  const discount = () => {
    const rate = ((markedPrice - price) / markedPrice) * 100;
    return rate.toFixed(0);
  };

  return (
    <Link className="w-72 h-auto" to={`/shop/${id}`}>
      <div
        className="w-72 h-72 rounded-3xl bg-cover bg-top p-3 flex justify-end"
        style={{ backgroundImage: `url(${photo})` }}
      />
      <p className="text-xl capitalize font-primaryRegular my-2">{name}</p>
      {ratingsIcons()}
      <div className="flex gap-4 items-center">
        <p className="text-2xl font-primaryRegular my-2">${price}</p>
        {markedPrice && (
          <>
            <p className="text-2xl font-primaryRegular my-2 text-grayWeight line-through">
              ${markedPrice}
            </p>
            <p className="text-xs text-redDark bg-redLight py-2 px-4 rounded-full">
              -{discount()}%
            </p>
          </>
        )}
      </div>
    </Link>
  );
};

export default ShopItemBlock;
