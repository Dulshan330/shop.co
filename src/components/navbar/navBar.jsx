import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import LogoutModal from "./modals/logoutModal";
import authStatues from "../../hooks/authStatues";

const NavBar = () => {
    const [searchText, setSearchText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const { authUser } = authStatues();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <React.Fragment>
        <div className="flex justify-center">
            <div className="flex max-w-screen-xl w-full py-4 justify-between border-b-2 border-grayLight">
            {/* logo */}
            <Link to={"/"} className="text-3xl font-bold uppercase">
                shop.co
            </Link>
            {/* nav-links */}
            <ul className="flex items-center mx-3 font-primaryRegular">
                <li className="mx-4 capitalize text-base">
                <Link to={"/shop"}>shop</Link>
                </li>
                <li className="mx-4 capitalize text-base">
                <Link>on sale</Link>
                </li>
                <li className="mx-4 capitalize text-base">
                <Link> new arrivals</Link>
                </li>
                <li className="mx-4 capitalize text-base">
                <Link> brands</Link>
                </li>
            </ul>
            {/* search-bar */}
            <div className="flex w-5/12 bg-grayLight rounded-full items-center px-3">
                <CiSearch size={24} />
                <input
                type="text"
                className="bg-inherit w-full mx-2 outline-none text-base font-primaryRegular"
                placeholder="Search for products..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                />
                {searchText && (
                <IoClose
                    size={24}
                    onClick={() => setSearchText("")}
                    className="hover:cursor-pointer"
                />
                )}
            </div>
            {/* nav-icons */}
            <div className="flex items-center gap-4">
                <FiShoppingCart size={24} className="hover:cursor-pointer" />
                <FaRegCircleUser
                size={24}
                className="hover:cursor-pointer"
                onClick={() => navigate("/account")}
                />
                {authUser && (
                <FiLogOut
                    size={24}
                    className="hover:cursor-pointer"
                    onClick={toggleModal}
                />
                )}
            </div>
            </div>
        </div>
        {isModalOpen && <LogoutModal toggleModal={toggleModal} />}
        </React.Fragment>
    );
};

export default NavBar;
