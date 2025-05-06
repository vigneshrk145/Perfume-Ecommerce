
'use client'
import LayoutHeaderandFooter from '@/layoutheaderandfooter'
import { RootState,AppDispatch } from '../../store';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '@/store/app/Product';
import { useCart } from '@/context/addtocartcontext';

const Product = () => {
  const { openCart ,closeCart } = useCart()
  const dispatch = useDispatch<AppDispatch>()
  const [product, setproduct] = useState<any>([])
  
  const ProductDatalist = useSelector((state: RootState) => state.product.ProductData as any)

  
    useEffect(() => {
  
      dispatch(fetchProduct())
  
    }, [])
  
    useEffect(() => {
      if (ProductDatalist) {
        setproduct(ProductDatalist)
      }
    }, [ProductDatalist])



  const modalopencart = () => {
    openCart()
  }

  return (
    <LayoutHeaderandFooter>
    <div>
      <div className="bg-[#f5f2ec] min-h-screen p-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* <!-- Image Section --> */}
    <div className="w-full">
      <img src="https://res.cloudinary.com/dqjqeogxe/image/upload/v1746259269/product/zl2r4o4ba1tthaimud5z.webp" alt="Vaporiser Pod" className="rounded-md w-full object-cover" />
    </div>

    {/* <!-- Product Details Section --> */}
    <div className="space-y-6 text-[#1f1f1f]">
      <h2 className="text-sm tracking-widest uppercase">Vaporiser Pod</h2>
      <p className="text-lg font-medium">$48.00 AUD</p>

      <p className="text-sm text-gray-600 leading-relaxed ">
        A customer favourite for over a decade, our Vaporiser Pods are safe, reliable and highly effective for scenting larger spaces.
        Perfect for entertaining or living areas, large rooms or offices.
      </p>

      {/* <!-- Colour --> */}
      <div className="space-y-1">
        <p className="text-sm font-medium">Colour: White</p>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 border border-gray-300 bg-white"></div>
          <div className="w-6 h-6 border border-gray-300 bg-black"></div>
        </div>
      </div>

      {/* <!-- Quantity Control --> */}
      <div className="flex items-center space-x-3">
        <button className="px-3 py-1 border border-gray-300">-</button>
        <span>2</span>
        <button className="px-3 py-1 border border-gray-300">+</button>
      </div>

      {/* <!-- Add to Cart --> */}
      <button onClick={modalopencart} className="w-full bg-black cursor-pointer text-white py-3 text-sm uppercase tracking-widest hover:bg-gray-800">
        Add to Cart
      </button>

      {/* <!-- Additional Details --> */}
      <div className="text-sm space-y-4 pt-6">
        <div>
          <h4 className="font-semibold">FRAGRANCE</h4>
          <p>Best paired with our 100% natural <a href="#" className="underline">Essence Blends</a>.</p>
        </div>

        <div>
          <h4 className="font-semibold">HOW TO USE</h4>
          <p>
            Allow to heat for five or ten minutes. Dose five or ten drops of Essence Blend without water. Essence scent
            will slowly evaporate. Increase or decrease dosage as desired. Clean with warm soapy water or alcohol.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">INGREDIENTS</h4>
          <p>Electric ceramic diffuser with cork base.</p>
        </div>

        <div>
          <h4 className="font-semibold">PRESENTATION</h4>
          <p>Presented in a signature Essensorie calico bag.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="bg-[#F3EFE8FF] py-6 text-center text-xl sm:text-3xl font-bold">
        <p>Best-sellers Gift sets</p>
      </div>

     
      <div className="bg-[#F3EFE8FF] py-12">
        <div className="mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {product.slice(0, 4).map((product: any) => (
            <div key={product._id}>
              <div className="mb-4 justify-items-center">
                <img src={product.image} alt={product.description} />
              </div>
              <h4 className="font-semibold text-md tracking-widest mb-2">
                {product.description}
              </h4>
              <p className="text-[#242424] font-medium text-sm">
                ${' '}{product.price}{' '}AUD
              </p>
            </div>
          ))}
        </div>
        <div className="bg-[#F3EFE8FF] py-2 text-center text-xl sm:text-3xl font-bold">
          Shop Best-Sellers
        </div>
      </div>

    </div>
    </LayoutHeaderandFooter>
  )
}

export default Product
