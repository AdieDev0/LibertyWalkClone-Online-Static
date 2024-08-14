import React from "react";
import Marquee from "react-fast-marquee";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const TheMost = () => {
  return (
    <div className="w-full mt-7">
      <div className="font-Oswald text-3xl px-4 md:px-8 lg:px-[150px]">
        <p>
          <span className="font-bold">NEWEST</span> LBWK RELEASES
        </p>
      </div>
      <hr className="border-b border-black my-4" />

      {/* Move */}
      <Marquee pauseOnHover direction="right">
        <div className="flex gap-2">
          <div className="w-60 h-[385px] lg:h-[420px] lg:w-72 bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2021/07/Liberty-Walk-C8-Corvette-Rear-Wing-Spoiler-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 font-semibold text-md lg:text-lg">CHEVROLET</p>
                <p className="lg:text-2xl text-xl">LB E★Silhouette WORKS Chevrolet Corvette C8 Body Kit</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div className="text-xl lg:text-2xl">
                  <p>$19,580.00 -</p>
                  <p>$21,780</p>
                </div>
                {/* Search Button */}
                <div className="absolute bottom-8 right-5 text-2xl text-gray-500 cursor-pointer">
                  <IoSearchOutline
                    size={30}
                    className="hover:text-red-800 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-60 h-[385px] lg:h-[420px] lg:w-72 bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2017/06/Liberty-Walk-BMW-M3-E92-Rear-Wing-Carbon-Fiber-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 font-semibold text-md lg:text-lg">BMW</p>
                <p className="lg:text-2xl text-xl">LB E★Works BMW M3 Ver.2 Wing (E92)</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div className="text-xl lg:text-2xl">
                  <p>$1,550.00 -</p>
                  <p>$2,050.00</p>
                </div>
                {/* Search Button */}
                <div className="absolute bottom-8 right-5 text-2xl text-gray-500 cursor-pointer">
                  <IoSearchOutline
                    size={30}
                    className="hover:text-red-800 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-60 h-[385px] lg:h-[420px] lg:w-72 bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2020/06/458_lbwk_7_ferrari-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 font-semibold text-md lg:text-lg">FERRARI</p>
                <p className="lg:text-2xl text-xl">LB E★Silhouette WORKS Ferrari 458 GT Rear Wing</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div className="text-xl lg:text-2xl">
                  <p>$8,640.00 -</p>
                  <p>$11,880.00</p>
                </div>
                {/* Search Button */}
                <div className="absolute bottom-8 right-5 text-2xl text-gray-500 cursor-pointer">
                  <IoSearchOutline
                    size={30}
                    className="hover:text-red-800 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-60 h-[385px] lg:h-[420px] lg:w-72 bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2017/06/LB%E2%98%85WORKS-NISSAN-GT-R-R35-TYPE-2-BODY-KIT-CANARDS-300x214.jpeg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 font-semibold text-md lg:text-lg">NISSAN</p>
                <p className="lg:text-2xl text-xl">LB E★Works Nissan GT-R R35 Type 2 Body Kit</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div className="text-xl lg:text-2xl">
                  <p>$20,690.00 -</p>
                  <p>$26,900.00</p>
                </div>
                {/* Search Button */}
                <div className="absolute bottom-8 right-5 text-2xl text-gray-500 cursor-pointer">
                  <IoSearchOutline
                    size={30}
                    className="hover:text-red-800 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-60 h-[385px] lg:h-[420px] lg:w-72 bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2020/06/Liberty-Walk-Ferrari-458-Body-Kit-7-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 font-semibold text-md lg:text-lg">FERRARI</p>
                <p className="lg:text-2xl text-xl">LB E★Works Ferrari 458 Rear Wing Ver.1</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div className="text-xl lg:text-2xl">
                  <p>$8,700.00 -</p>
                  <p>$12,800.00</p>
                </div>
                {/* Search Button */}
                <div className="absolute bottom-8 right-5 text-2xl text-gray-500 cursor-pointer">
                  <IoSearchOutline
                    size={30}
                    className="hover:text-red-800 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-60 h-[385px] lg:h-[420px] lg:w-72 bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2023/04/Subaru-BRZ-ZD8-Body-Kit-LB-Nation-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 font-semibold text-md lg:text-lg">SUBARU</p>
                <p className="lg:text-2xl text-xl">LB E★Nation Subaru BRZ (ZD8) Rear GT Wing Ver.1</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div className="text-xl lg:text-2xl">
                  <p>$2,530.00 -</p>
                  <p>$3,850.00</p>
                </div>
                {/* Search Button */}
                <div className="absolute bottom-8 right-5 text-2xl text-gray-500 cursor-pointer">
                  <IoSearchOutline
                    size={30}
                    className="hover:text-red-800 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-60 h-[385px] lg:h-[420px] lg:w-72 bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2020/12/LIBERTY-WALK-NISSAN-GT-R-R35-TYPE-2-HOOD-300x214.jpeg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 font-semibold text-md lg:text-lg">NISSAN</p>
                <p className="lg:text-2xl text-xl">LB E★Works Nissan GT-R R35 Type 2 Hood </p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div className="text-xl lg:text-2xl">
                  <p>$1,620.00 -</p>
                  <p>$2,700.00</p>
                </div>
                {/* Search Button */}
                <div className="absolute bottom-8 right-5 text-2xl text-gray-500 cursor-pointer">
                  <IoSearchOutline
                    size={30}
                    className="hover:text-red-800 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-60 h-[385px] lg:h-[420px] lg:w-72 bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2020/06/liberty-walk-toyota-supra-wide-body-kit-a90-3-300x214.jpeg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 font-semibold text-md lg:text-lg">TOYOTA</p>
                <p className="lg:text-2xl text-xl">LB E★Works Toyota Supra (A90) Bonnet Hood </p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div className="text-xl lg:text-2xl">
                  <p>$3,080.00</p>
                </div>
                {/* Search Button */}
                <div className="absolute bottom-8 right-5 text-2xl text-gray-500 cursor-pointer">
                  <PiShoppingCartSimpleLight
                    size={30}
                    className="hover:text-red-800 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-60 h-[385px] lg:h-[420px] lg:w-72 bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2020/09/LibertyWalk_Infiniti_Q50_Body_kit-300x214.jpeg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 font-semibold text-md lg:text-lg">INFINITI</p>
                <p className="lg:text-2xl text-xl">LB E★Nation Infiniti Q50 Front Bumper with Diffuser</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div className="text-xl lg:text-2xl">
                  <p>$1,540.00 -</p>
                  <p>$2,090.00</p>
                </div>
                {/* Search Button */}
                <div className="absolute bottom-8 right-5 text-2xl text-gray-500 cursor-pointer">
                  <IoSearchOutline
                    size={30}
                    className="hover:text-red-800 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-60 h-[385px] lg:h-[420px] lg:w-72 bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2023/09/Ferrari-348-Liberty-Walk-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 font-semibold text-md lg:text-lg">FERRARI</p>
                <p className="lg:text-2xl text-xl">LB E★WORKS Ferrari 348 Body Kit</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div className="text-xl lg:text-2xl">
                  <p>$12,650.00</p>
                </div>
                {/* Search Button */}
                <div className="absolute bottom-8 right-5 text-2xl text-gray-500 cursor-pointer">
                  <PiShoppingCartSimpleLight
                    size={30}
                    className="hover:text-red-800 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-60 h-[385px] lg:h-[420px] lg:w-72 bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2022/11/Ferrari-F355-LB-WORKS-Rear-Diffuser-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 font-semibold text-md lg:text-lg">FERRARI</p>
                <p className="lg:text-2xl text-xl">LB E★WORKS Ferrari F355 Rear Wing</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div className="text-xl lg:text-2xl">
                  <p>$2,200.00</p>
                </div>
                {/* Search Button */}
                <div className="absolute bottom-8 right-5 text-2xl text-gray-500 cursor-pointer">
                  <PiShoppingCartSimpleLight
                    size={30}
                    className="hover:text-red-800 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-60 h-[385px] lg:h-[420px] lg:w-72 bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2020/07/LB-WORKS-DODGE-Challenger_10-scaled-1-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 font-semibold text-md lg:text-lg">DODGE</p>
                <p className="lg:text-2xl text-xl">LB E★WORKS Dodge Challenger Body Kit</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div className="text-xl lg:text-2xl">
                  <p>$4,800.00 -</p>
                  <p>$5,780.00</p>
                </div>
                {/* Search Button */}
                <div className="absolute bottom-8 right-5 text-2xl text-gray-500 cursor-pointer">
                  <IoSearchOutline
                    size={30}
                    className="hover:text-red-800 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default TheMost;
