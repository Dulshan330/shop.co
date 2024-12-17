import React, { useState } from "react";
import { Link } from "react-router-dom";
import WishlistItemDeleteModal from "./Modals/wishlistItemDeleteModal";

const WishlistRowComponent = ({ id, photo, name, price, markedPrice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <tr>
      <td className="border-2 p-3">
        <Link to={`/shop/${id}`}>
          <div
            className="w-40 h-40 rounded-3xl bg-cover bg-top"
            style={{ backgroundImage: `url(${photo})` }}
          />
        </Link>
      </td>
      <td className="border-2 text-center">
        <Link to={`/shop/${id}`} className="text-lg">
          {name}
        </Link>
      </td>
      <td className=" border-2 text-center">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-primaryRegular">$ {price}</span>
          <span className="text-lg font-primaryRegular line-through text-grayWeight">
            $ {markedPrice}
          </span>
        </div>
      </td>
      <td className="border-2">
        <div className="flex flex-col justify-center items-center gap-4">
          <button className="flex w-2/3 justify-center capitalize rounded-md bg-black px-3 py-1.5 text-sm font-primaryBold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            add to cart
          </button>
          <button
            onClick={toggleModal}
            className="flex w-2/3 justify-center capitalize rounded-md bg-white border border-black px-3 py-1.5 text-sm font-primaryBold leading-6 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            remove
          </button>
        </div>
      </td>
      {isModalOpen && (
        <WishlistItemDeleteModal id={id} toggleModal={toggleModal} />
      )}
    </tr>
  );
};

export default WishlistRowComponent;
