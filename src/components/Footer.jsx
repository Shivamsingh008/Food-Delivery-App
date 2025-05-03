import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className=" w-full md:w-2/3 text-gray-600">
            Get the most delicious bites delivered to your door with QuickBite.
            Our fastest delivery service carries a variety of cuisines from
            local restaurants.
          </p>
        </div>

        <div>
          <p className=" text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 62057058**</li>
            <li>xtrajakumar@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className=" py-5 text-sm text-center ">
          2025@ QuickBite.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
