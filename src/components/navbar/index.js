import React from "react";
import { IoArrowBackOutline, IoReorderFourOutline } from "react-icons/io5";


const Navbar = ({ onBack }) => {
  return (
    <div className="flex flex-row items-center justify-between h-20 p-8 bg-[#024752]">
      <div onClick={()=> onBack()}>
        {" "}
        <IoArrowBackOutline size={20} color="#fff" />
      </div>
      <div className="text-3xl text-white">
        Shaar<span className="text-red-500">é</span>
      </div>
      <div>
        {" "}
        <IoReorderFourOutline size={20} color="#fff" />
      </div>
    </div>
  );
};

export default Navbar;
