import React, { useState } from "react";
import { RxMixerVertical } from "react-icons/rx";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { categories, colors, shopItems, sizes } from "../info/shopInfo";
import ShopItemBlock from "../components/shop/shopItemBlock";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Casual");
  const [isSortButtonSeleted, setIsSortButtonSeleted] = useState(false);
  const [isSelectedSort, setIsSelectedSort] = useState("Default Sorting");
  const [] = useState();

  const filteredItems =
    selectedCategory === "Casual"
      ? shopItems
      : shopItems.filter((item) => item.category === selectedCategory);

  // const filteredItems = () => {

  // };

  const sortedAndFilterdItems = filteredItems.sort((a, b) => {
    if (isSelectedSort === "Most Popularity") {
      return b.ratings - a.ratings;
    } else if (isSelectedSort === "Price: low to high") {
      return a.price - b.price;
    } else if (isSelectedSort === "Price: high to low") {
      return b.price - a.price;
    }
    return 0;
  });

  const handleSortByPopularity = () => {
    setIsSelectedSort("Most Popularity");
    setIsSortButtonSeleted(false);
  };

  const handleSortByPriceLowToHigh = () => {
    setIsSelectedSort("Price: low to high");
    setIsSortButtonSeleted(false);
  };

  const handleSortByPriceHighToLow = () => {
    setIsSelectedSort("Price: high to low");
    setIsSortButtonSeleted(false);
  };

  return (
    <React.Fragment>
      {/* Breadcrumb */}
      <div className="m-auto max-w-screen-xl my-4">
        <p className="flex items-center gap-2 capitalize font-primaryRegular">
          <Link to={"/"}>home</Link> <IoIosArrowForward />
          <Link to={"/shop"}>shop</Link>
        </p>
      </div>
      <div className="flex m-auto max-w-screen-xl gap-4 mt-2">
        {/* filter-section */}
        <div className="w-1/4 border-2 border-gray-200 rounded-2xl px-4 h-fit">
          <div className="flex justify-between items-center my-4">
            <span className="text-xl capitalize font-primaryRegular">
              filter
            </span>
            <RxMixerVertical
              className="hover:cursor-pointer text-gray-500"
              size={24}
            />
          </div>
          {/* divider */}
          <hr className="border-t-2 border-solid m-auto" />
          {/* categories-range */}
          <div className="flex my-4 gap-2 flex-col">
            {categories.map((category, index) => (
              <button
                className="flex justify-between items-center"
                onClick={() => setSelectedCategory(category)}
              >
                <span
                  key={index}
                  className="text-base font-primaryRegular capitalize"
                >
                  {category}
                </span>
                <IoIosArrowForward />
              </button>
            ))}
          </div>
          {/* divider */}
          <hr className="border-t-2 border-solid m-auto" />
          {/* price-range */}
          <div className="my-4">
            <span className="text-xl capitalize font-primaryRegular">
              price
            </span>
            <div></div>
          </div>
          {/* divider */}
          <hr className="border-t-2 border-solid m-auto" />
          {/* color-range */}
          <div className="my-4">
            <span className="text-xl capitalize font-primaryRegular">
              colors
            </span>
            <div className="my-2">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-full ${color} border-gray-600 border-2 m-1`}
                />
              ))}
            </div>
          </div>
          {/* divider */}
          <hr className="border-t-2 border-solid m-auto" />
          {/* size-range */}
          <div className="my-4">
            <span className="text-xl capitalize font-primaryRegular">size</span>
            <div className="py-2">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className="text-base font-primaryRegular py-2 px-4 bg-gray-200 rounded-full capitalize m-1"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* shop-items */}
        <div className="w-3/4">
          <div className="flex justify-between items-center">
            <span className="text-3xl font-primaryRegular capitalize">
              {selectedCategory}
            </span>
            {/* Sort-Filter */}
            <div className="justify-end">
              <button
                class="text-black text-base gap-3 font-primaryRegular rounded-lg px-4 py-2.5 text-center inline-flex items-center"
                onClick={() => setIsSortButtonSeleted(!isSortButtonSeleted)}
              >
                Sort by : {isSelectedSort}
                <IoIosArrowDown />
              </button>
              {isSortButtonSeleted && (
                <div class="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-auto">
                  <ul
                    class="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer"
                      onClick={handleSortByPopularity}
                    >
                      Most Popularity
                    </li>
                    <li
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer"
                      onClick={handleSortByPriceLowToHigh}
                    >
                      Price: low to high
                    </li>
                    <li
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer"
                      onClick={handleSortByPriceHighToLow}
                    >
                      Price: high to low
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-y-12 gap-x-6 my-6">
            {sortedAndFilterdItems.map((item) => (
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShopPage;
