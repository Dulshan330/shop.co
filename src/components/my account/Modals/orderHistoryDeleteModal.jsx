import React from "react";
import { MdErrorOutline } from "react-icons/md";

const OrderHistoryDeleteModal = ({ id, toggleModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col items-center justify-center gap-3">
        <MdErrorOutline size={72} color="gray" />
        <p className="text-base font-primaryRegular">
          Are you sure you want to delete this order history?
        </p>
        <div className="flex gap-3 w-full">
          <button
            onClick={toggleModal}
            className="px-4 py-2 bg-redLight text-redDark rounded w-1/2"
          >
            Yes, I'm sure
          </button>
          <button
            onClick={toggleModal}
            className="px-4 py-2 bg-white text-black rounded border border-grayWeight w-1/2"
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryDeleteModal;
