import React, { useState } from "react";
import { shopItems } from "../../info/shopInfo";
import WishlistRowComponent from "./wishlistRowComponent";

const MyWishlist = () => {
  return (
    <div className="m-2">
      <span className="text-2xl capitalize font-primaryRegular">
        my wishlist
      </span>
      {/* divider */}
      <div className="my-2">
        <hr className="border-t-2 border-solid " />
      </div>
      {/* table */}
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="w-1/6 border-2 capitalize">item</th>
              <th className="w-2/6 border-2 capitalize">product name</th>
              <th className="w-1/6 border-2 capitalize">price</th>
              <th className="w-2/6 border-2 capitalize">actions</th>
            </tr>
          </thead>
          <tbody>
            {shopItems.map((item) => (
              <WishlistRowComponent
                key={item.id}
                id={item.id}
                name={item.name}
                photo={item.photo}
                price={item.price}
                markedPrice={item.markedPrice}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWishlist;
