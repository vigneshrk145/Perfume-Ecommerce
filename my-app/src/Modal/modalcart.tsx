'use client'
import { useCart } from '@/context/addtocartcontext'
import React from 'react'
import { IoMdClose } from 'react-icons/io'

function Modalcart() {
    const { isCartOpen, closeCart } = useCart()
    return (
        <div>

<div
      className={`fixed top-0 right-0 w-full max-w-md h-full bg-[#fdf9f2] shadow-lg transform ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 z-50`}
    >
                <div className="flex justify-between items-center border-b p-4">
                    <h2 className="text-lg font-semibold tracking-wide">CART</h2>
                    <button onClick={closeCart} id="closeCartBtn" className="text-2xl cursor-pointer font-bold text-gray-600 "><IoMdClose /></button>
                </div>

                <div className="p-4 flex flex-col gap-4">

                    <div className="flex items-center gap-4">
                        <img src="https://res.cloudinary.com/dqjqeogxe/image/upload/v1746259269/product/zl2r4o4ba1tthaimud5z.webp" alt="product" className="w-24 h-24 object-cover rounded" />
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wide">Lavender Grapefruit Relax Pack</h3>
                            <p className="text-gray-600">$72.00 AUD</p>
                            <div className="flex items-center mt-2 space-x-2">
                                <button className="px-2 py-1 border rounded">−</button>
                                <span>4</span>
                                <button className="px-2 py-1 border rounded">+</button>
                                <button className="text-blue-600 underline text-sm ml-4">Remove</button>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-between border p-3 rounded">
                        <div>
                            <p className="text-sm">Reduce the carbon footprint of your purchase</p>
                            <p className="font-semibold text-sm">with <span className="text-black">carbon<span className="text-green-600">Click</span></span></p>
                        </div>
                        <button className="bg-black text-white px-4 py-2 rounded text-sm">+ $2</button>
                    </div>


                    <input type="text" placeholder="Add order note" className="w-full border p-2 rounded text-sm" />
                    <p className="text-xs text-gray-500">Taxes and shipping calculated at checkout</p>
                </div>


                <div className="p-4 border-t">
                    <button className="w-full bg-black text-white py-3 font-semibold tracking-widest">
                        CHECKOUT ・ $288.00
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Modalcart
