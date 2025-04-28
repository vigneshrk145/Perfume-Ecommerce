import Image from "next/image";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";

function Navbar() {
  return (
    <div className="">
      <div className="text-center py-4 bg-[#F3EFE8] ">
        <h4>FREE SHIPPING ON ALL ORDERS | ECO-FRIENDLY PACKAGING</h4>
      </div>

      <div className="text-center py-4 font-bold tracking-tight bg-[black] text-[white] ">
        <h4>E S SENSORIE</h4>
      </div>
    </div>

  );
}

export default Navbar;
