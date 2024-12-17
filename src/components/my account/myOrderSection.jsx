import React, { useState } from "react";
import { shopItems } from "../../info/shopInfo";
import OrderHistoryComponent from "./orderHistoryComponent";

const MyOrderSection = () => {
  // tempory value
  const [qty, setQty] = useState(4);

  return (
    <div className="m-2">
      <span className="text-2xl capitalize font-primaryRegular">
        order history
      </span>
      {/* divider */}
      <div className="my-2">
        <hr className="border-t-2 border-solid " />
      </div>
      {/* order-history-list */}
      <div className="flex flex-col gap-3">
        {/* order-history-componet */}
        {shopItems.map((item) => (
          <OrderHistoryComponent
            key={item.id}
            id={item.id}
            name={item.name}
            photo={item.photo}
            qty={qty}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MyOrderSection;
