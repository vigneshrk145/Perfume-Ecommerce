'use client'
import { useCart } from '@/context/addtocartcontext'
import React from 'react'
import { BiUser } from 'react-icons/bi'
import { IoCart } from 'react-icons/io5'
import { useRouter } from 'next/navigation';

function Header() {
     const { openCart ,closeCart } = useCart()
const router = useRouter();
     const openlogin = () => {
        router.push('/login')
     }
  return (
    <div> <div className="text-center py-2 text-[11px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px] 2xl:text-[16px]  bg-[#F3EFE8] font-medium">
    <h4>FREE SHIPPING ON ALL ORDERS | ECO-FRIENDLY PACKAGING</h4>
  </div>

  {/* Logo + Icons */}
  <div className="sticky top-0 z-50">

    <div className="flex items-center justify-between py-6 px-4 sm:px-8 bg-[#242424] relative">
      <h4 className="text-center text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-[34px] font-bold text-[#F3EFE8] absolute left-1/2 transform -translate-x-1/2

">
        B E L V I S H

      </h4>


      {/* Optional: Hamburger Menu Placeholder */}
      <div className="sm:hidden">
        <span className="text-white text-xl">☰</span>
      </div>

      {/* Icons */}
      <div className="ml-auto flex gap-4 sm:gap-5 z-10 cursor-pointer">
        <BiUser onClick={openlogin} className="text-white text-[20px] sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl" />
        {/* <IoIosSearch className="text-white text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl" /> */}
        <IoCart  onClick={openCart} className="text-white text-[20px] sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl" />
      </div>

    </div>

    {/* Navigation Links */}
    <div className="hidden sm:block bg-[#242424] py-4 text-white">
      <ul className="flex flex-wrap justify-center gap-8 text-[16px] cursor-pointer">
        <li>For Home</li>
        <li>For Body</li>
        <li>By Fragrance</li>
        <li>For Gifting</li>
        <li>About</li>
      </ul>
    </div>
     </div>

      
    </div>
  )
}

export default Header
