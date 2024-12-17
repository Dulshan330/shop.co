import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import authStatues from "../../hooks/authStatues";

const TopHeader = () => {
    const [close, setClose] = useState(true);
    const {authUser} = authStatues();

    useEffect(() => {
        if( !authUser ){
            setClose(true);
        }else{
            setClose(false);
        }
    },[authUser])

    return (
        <React.Fragment>
        {close && (
            <div className="flex bg-black justify-between items-center py-2 px-2">
            <span></span>
            <div className="flex justify-center items-center">
                <p className="text-white text-sm">
                Sign up and get 20% off to your first order.
                </p>
                <Link to={'/signup'} className="text-white mx-1.5 capitalize underline text-sm">
                sign up now
                </Link>
            </div>
            <IoClose size={20} color="white" onClick={() => setClose(false)} className="hover:cursor-pointer" />
            </div>
        )}
        </React.Fragment>
    );
};

export default TopHeader;
