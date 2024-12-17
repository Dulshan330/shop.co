import React from "react";
import { Link } from "react-router-dom";

const FooterColumn = ({ title, links }) => {
  return (
    <div className="m-2">
      <p className="text-base font-primaryMedium uppercase my-4">{title}</p>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="my-2 font-primaryRegular capitalize">
            <Link to={"/" + link.replace(/\s+/g, "_")}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
