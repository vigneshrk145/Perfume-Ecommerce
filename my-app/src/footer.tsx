import React from 'react'

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
       <footer className="bg-[#F3EFE8FF] text-black px-6 py-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-medium mb-2">Join The Club</h2>
            <p className="text-lg mb-4">Stay ahead of the curve with our offers updates!</p>
            <div className="relative mb-4">
              <input type="email" placeholder="Enter your email" className="w-full border-b-2 border-black py-2 pr-8 focus:outline-none" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xl">➜</span>
            </div>
          
          </div>


          <div>
            <h3 className="text-xl font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-lg cursor-pointer">
              <li>Home</li>
              <li>Shop</li>
              <li>Brands</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Wishlist</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl  font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-lg cursor-pointer">
              <li>Search</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Returns & Refunds</li>
              <li>Terms & Conditions</li>
              <li>Request a fragrance</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl  font-semibold mb-4">Our Store</h3>
            <p className="text-lg">M-4, Kirti Nagar, New Delhi</p>
            <p className="text-lg">Zip Code: 110015</p>
            <p className="text-lg">Phone: +91 85889 96969</p>
            <p className="text-lg">Email: <a href="mailto:cares@belvish.com">cares@belvish.com</a></p>
          </div>
        </div>


        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-700">© Belvish International 2025</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0 text-xl">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>
      </footer>
    </div>
  )
}

export default Footer
