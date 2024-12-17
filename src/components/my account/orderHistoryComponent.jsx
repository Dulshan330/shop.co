import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiTicktick } from "react-icons/si";
import { IoIosCloseCircleOutline } from "react-icons/io";
import OrderHistoryDeleteModal from "./Modals/orderHistoryDeleteModal";

const OrderHistoryComponent = ({
  id,
  name,
  photo,
  price,
  qty,
  description,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col">
      <div className="rounded-lg border-2 border-grayLightWeight p-2">
        <div className="flex gap-2">
          <div className="w-1/5 flex flex-col items-center">
            <span className="font-primaryRegular capitalize text-base">
              order number
            </span>
            <span className="font-primaryRegular text-base">W24fgu6G78</span>
          </div>
          <div className="w-1/5 flex flex-col items-center">
            <span className="font-primaryRegular capitalize text-base">
              date placed
            </span>
            <span className="font-primaryRegular text-base">17.09.2024</span>
          </div>
          <div className="w-1/5 flex flex-col items-center">
            <span className="font-primaryRegular capitalize text-base">
              total amount
            </span>
            <span className="font-primaryRegular text-base">
              $ {price * qty}
            </span>
          </div>
          <div className="w-2/5 flex flex-col justify-center items-end">
            <button className="px-4" onClick={toggleModal}>
              <IoIosCloseCircleOutline size={24} color="crimson" />
            </button>
          </div>
        </div>
        <hr />
        {/* product-details */}
        <div className="flex w-full p-4">
          <div className="w-1/5 flex items-center justify-center">
            <Link to={`/shop/${id}`}>
              <div
                className="w-40 h-40 rounded-3xl bg-cover bg-top"
                style={{ backgroundImage: `url(${photo})` }}
              />
            </Link>
          </div>
          <div className="w-4/5 py-2 px-4">
            <div className="flex justify-between">
              <Link to={`/shop/${id}`} className="text-base font-primaryMedium">
                {name}
              </Link>
              <span className="font-primaryRegular">$ {price}</span>
            </div>
            <p className="my-2">{description}</p>
            <div className="my-4 flex justify-between items-center">
              <span className="font-primaryRegular flex items-center gap-2">
                <SiTicktick color="lime" /> Order Completed on 12.09.2024
              </span>
              <span className="font-primaryRegular">Qty: {qty}</span>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <OrderHistoryDeleteModal id={id} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default OrderHistoryComponent;
