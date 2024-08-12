import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Links = () => {
  return (
    <div className="w-full h-auto px-4 md:px-8 lg:px-[150px]">
      {/* link SocMed */}
      <div className="hidden md:flex gap-10 md:gap-28 text-center items-center justify-center">
        <div className="flex text-xl font-semibold font-Oswald gap-2">
          <IoLogoInstagram size={30} className="hover:scale-110 duration-200" />
          <div>
            <span>@_adie.00</span>
            <p className="text-sm text-red-500">Official Instagram</p>
          </div>
        </div>

        <div className="flex text-xl font-semibold font-Oswald gap-2">
          <SiGithub size={30} className="hover:scale-110 duration-200" />
          <div>
            <span>@AdieDev0</span>
            <p className="text-sm text-red-500">Official Github</p>
          </div>
        </div>

        <div className="flex text-xl font-semibold font-Oswald gap-2">
          <FaFacebookSquare
            size={30}
            className="hover:scale-110 duration-200"
          />
          <div>
            <span>Adrey Barrios</span>
            <p className="text-sm text-red-500">Official Facebook</p>
          </div>
        </div>

        <div className="flex text-xl font-semibold font-Oswald gap-2">
          <AiFillTikTok size={30} className="hover:scale-110 duration-200" />
          <div>
            <span>Secret</span>
            <p className="text-sm text-red-500">Official Tiktok</p>
          </div>
        </div>
      </div>  
      {/* Lines */}
      <hr className="border-b border-black my-4" />
      {/* The Box */}
      <div className="text-center mt-4 mb-5">
        <p className="font-Oswald text-xl md:text-2xl font-semibold">
          SHOP OFFICIAL <span className="font-bold">LIBERTY WALKS</span> BODY
          KITS - MADE TO ORDER / USA SHIPPING ONLY
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-7">
        <div className="border font-Oswald w-full md:w-96 h-60 relative overflow-hidden cursor-pointer">
          <img
            src="https://th.bing.com/th/id/R.765975add93aa62a63c5dc6a0fca3d44?rik=6rNTMNQyZyRIMw&riu=http%3a%2f%2fdailytuning.com%2fwp-content%2fuploads%2f2018%2f11%2fLiberty-Walk-Nissan-GT-R-by-RACE-10.jpg&ehk=Vl3AEFtH3kp8Q%2f3urIsT72df03egtBk4dunlrVQ6An4%3d&risl=&pid=ImgRaw&r=0"
            alt="car"
            className="absolute w-full h-full object-cover"
          />
          <div className="relative text-white p-4 bg-black/70 h-full flex flex-col justify-end">
            <p className="font-Oswald text-xl md:text-2xl">Liberty</p>
            <span className="font-Oswald font-semibold text-xl md:text-2xl">Walk</span>
            <p className="mb-2 text-xl md:text-2xl">video</p>
            <p className="text-red-700 mt-2 text-lg md:text-xl font-bold">
              What Does It Take?
            </p>
            <button className="border-2 border-white text-white bg-black mt-2 text-lg md:text-xl px-2 py-1  hover:border-red-700 hover:text-red-700 duration-300">
              WATCH NOW
            </button>
          </div>
        </div>

        <div className="border font-Oswald w-full md:w-96 h-60 relative overflow-hidden cursor-pointer">
          <img
            src="https://i.etsystatic.com/23055944/r/il/567f67/2453497843/il_fullxfull.2453497843_7ee4.jpg"
            alt="car"
            className="absolute w-full h-full object-cover"
          />
          <div className="relative text-white p-4 bg-black/70 h-full flex flex-col justify-end">
            <p className="font-Oswald text-xl md:text-2xl">Liberty</p>
            <span className="font-Oswald font-semibold text-xl md:text-2xl">Walk</span>
            <p className="mb-2 text-xl md:text-2xl">video</p>
            <p className="text-red-700 mt-2 text-lg md:text-xl font-bold">
              Official Shop
            </p>
            <button className="border-2 border-white text-white bg-black mt-2 text-lg md:text-xl px-2 py-1 hover:border-red-700 hover:text-red-700 duration-300">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="border font-Oswald w-full md:w-96 h-60 relative overflow-hidden cursor-pointer">
          <img
            src="https://i.pinimg.com/736x/2e/c6/6d/2ec66d24ebf7ddb9f257d63077101b56--gtr-nissan-gtr-r.jpg"
            alt="car"
            className="absolute w-full h-full object-cover"
          />
          <div className="relative text-white p-4 bg-black/70 h-full flex flex-col justify-end">
            <p className="font-Oswald text-xl md:text-2xl">Liberty</p>
            <span className="font-Oswald font-semibold text-xl md:text-2xl">Walk</span>
            <p className="mb-2 text-xl md:text-2xl">Race Video</p>
            <p className="text-red-700 mt-2 text-lg md:text-xl font-bold">
              What Does It Take?
            </p>
            <button className="border-2 border-white text-white bg-black mt-2 text-lg md:text-xl px-2 py-1  hover:border-red-700 hover:text-red-700 duration-300">
              WATCH NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
