'use client'
import React, { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import slidebar from "@/app/home.json";
import { LuLeaf } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../src/store';
import { fetchProduct } from '../src/store/app/Product';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation';


function Navbar() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState(slidebar.slides);
  const dispatch = useDispatch<AppDispatch>()
  const [product, setproduct] = useState<any>([])
  const ProductDatalist = useSelector((state: RootState) => state.product.ProductData as any)


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides]);

  const { image, heading, subheading, button, align } = slides[current];



  useEffect(() => {

    dispatch(fetchProduct())

  }, [])

  useEffect(() => {
    if (ProductDatalist) {
      setproduct(ProductDatalist)
    }
  }, [ProductDatalist])


  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const collections = [
    {
      title: "POMELO\nPETITGRAIN",
      label: "CITRUS",
      image: "https://essensorie.com/cdn/shop/files/PomeloPetitgrainSummer-7.jpg?v=1717393818&width=800",
    },
    {
      title: "CEDAR\nSANDALWOOD",
      label: "WOOD",
      image: "https://essensorie.com/cdn/shop/files/DSC05386_3bc44227-e6cf-4a2f-9766-ad6d0bca67fb.jpg?v=1717393732&width=800",
    },
    {
      title: "LAVENDER\nGRAPEFRUIT",
      label: "FLORAL",
      image: "https://essensorie.com/cdn/shop/files/SquareMaster_Relax_Pack.jpg?v=1717393882&width=800",
    },
  ];

const handleproduct = () => {
  router.push('/product')
}


  return (
    <div>
      {/* Sticky Top Banner */}

    
      {/* Hero Banner */}
      <div
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] bg-center bg-cover flex items-center transition-all duration-1000 px-4 sm:px-16"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className={`text-white max-w-md ${align === "left"
            ? "ml-0 mr-auto text-left items-start"
            : "ml-auto mr-0 text-right items-end"
            } flex flex-col gap-4`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <p className="uppercase tracking-widest text-xs sm:text-sm">{subheading}</p>
              <h1 className="text-[15px] sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-3xl 2xl:text-4xl  font-bold">{heading}</h1>
              <button className="px-4 py-2 sm:px-6 sm:py-3 text-[11px] sm:text-[11px] md:text-[11px] lg:text-[11px] xl:text-[15px] 2xl:text-md border text-black bg-white hover:bg-gray-100 transition">
                {button}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Icons Grid Section */}
      <div className="bg-[#F3EFE8FF] py-14">
        <div className="mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Feature icon={<LuLeaf className="text-5xl" />} title="NATURE BOTTLED" text="Botanical artisan perfumery. Natural essential oils, no synthetic aroma-chemicals." />
          <Feature icon={<CiLocationOn className="text-5xl" />} title="MELBOURNE-MADE" text="Masterfully blended natural fragrances, handmade in Melbourne." />
          <Feature icon={<MdOutlineLocalShipping className="text-5xl" />} title="FAST SHIPPING" text="Complimentary shipping on all domestic orders. Recyclable and plastic-free packaging." />
          <Feature icon={<GrResources className="text-5xl" />} title="SUSTAINABILITY" text="Glass bottles, renewable resource fragrances, sugarcane bioplastic tubes." />
        </div>
      </div>

      {/* Banner Image */}
      <div>
        <img
          src={slidebar.banner2[0].image}
          className="w-full h-[300px] sm:h-[500px] object-cover"
          alt="Banner"
        />
      </div>

      {/* Gift Sets Heading */}
      <div className="bg-[#F3EFE8FF] py-6 text-center text-xl sm:text-3xl font-bold">
        <p>Best-sellers Gift sets</p>
      </div>

      {/* Repeat Features Section */}
      <div className="bg-[#F3EFE8FF] py-12">
        <div className="mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {product.slice(0, 4).map((product: any) => (
            <div key={product._id} onClick={handleproduct} className=" cursor-pointer">
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



      <div>
        <img
          src='https://essensorie.com/cdn/shop/files/Screenshot_2024-05-07_at_4.06.39_pm_7c655974-348d-48af-bb88-45756c256b32.png?v=1715236835&width=2000'
          className="w-full h-[300px] sm:h-[700px] object-cover"
          alt="Banner"
        />
      </div>




      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 sm:p-6 md:p-10 bg-[#f5f3ef]">
        {collections.map(({ title, label, image }, index) => (
          <div
            key={index}
            className="relative bg-cover bg-center h-[350px] md:h-[300px] lg:h-[300px] xl:[500px] 2xl:h-[500px] flex items-center"
            style={{ backgroundImage: `url('${image}')` }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <motion.div
              className="relative p-6 text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-sm tracking-widest mb-5">{label}</p>
              <h2 className="text-xl md:text-2xl font-semibold leading-tight whitespace-pre-line">
                {title}
              </h2>
              <button className="mt-6 bg-white text-black px-6 py-3 text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-sm 2xl:text-sm tracking-wider">
                SHOP COLLECTION
              </button>
            </motion.div>
          </div>
        ))}
      </div>

      <div>
        <img
          src='https://essensorie.com/cdn/shop/files/Essensorie_customers.jpg?v=1719023604&width=1200'
          className="w-full h-[300px] sm:h-[700px] object-cover"
          alt="Banner"
        />
      </div>

      <div className="bg-[#F3EFE8FF] py-12">
        <div className="mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {product.slice(4, 8).map((product: any) => (
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
      </div>

      <div>
        <img
          src='https://essensorie.com/cdn/shop/files/DSC04809_c95d454d-0ba4-4233-bca2-be65b4023eb5.jpg?v=1715236776&width=2000'
          className="w-full h-[300px] sm:h-[700px] object-cover"
          alt="Banner"
        />
      </div>
    </div>
  );
}

// ✅ Feature Card Component
const Feature = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div>
    <div className="mb-4 justify-items-center">{icon}</div>
    <h4 className="font-semibold text-md tracking-widest mb-2">{title}</h4>
    <p className="text-[#242424] font-medium text-sm">{text}</p>
  </div>
);

export default Navbar;
