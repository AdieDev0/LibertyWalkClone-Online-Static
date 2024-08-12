import React from "react";
import Marquee from "react-fast-marquee";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const Release = () => {
  return (
    <div className="w-full mt-7">
      <div className="font-Oswald text-3xl px-4 md:px-8 lg:px-[150px]">
        <p>
          <span className="font-bold">NEWEST</span> LBWK RELEASES
        </p>
      </div>
      <hr className="border-b border-black my-4" />

      {/* moving cards */}
        <Marquee pauseOnHover>
        <div className="flex gap-2">
          <div className="w-72 h-[420px] bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2024/08/454721079_18448537441059794_7705988934792849966_n-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 text-lg font-semibold">TESLA</p>
                <p>LB E★WORKS Tesla 3 Body Kit</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div>
                  <p>$6,720.00 -</p>
                  <p>$7,920.00</p>
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

          <div className="w-72 h-[420px] bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2020/04/LB-WORKS-LEXUS-LX600_00003-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 text-lg font-semibold">LEXUS</p>
                <p>LB E★WORKS Lexus LX 600 Full Body Kit</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div>
                  <p>$7,370.0 -</p>
                  <p>$37,450.00</p>
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

          <div className="w-72 h-[420px] bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2024/06/LB-WORKS-F8-Tributo-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 text-lg font-semibold">FERRARI</p>
                <p>LB E★WORKS Ferrari F8 Tributo Complete Body Kit</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div>
                  <p>$30,470.00 -</p>
                  <p>$50,050.00</p>
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

          <div className="w-72 h-[420px] bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2024/01/Countach_widebody-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 text-lg font-semibold">LAMBORGHINI</p>
                <p>LB E★WORKS Lamborghini Countouch</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div>
                  <p>$42,350.00</p>
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

          <div className="w-72 h-[420px] bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2023/08/Ford-Bronco-Fender-Flares-Liberty-Walk-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 text-lg font-semibold">FORD</p>
                <p>LB E★WORKS Ford Bronco Fender Flares(2021+)</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div>
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

          <div className="w-72 h-[420px] bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2023/07/Liberty-Walk-McLaren-720S-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 text-lg font-semibold">MCLAREN</p>
                <p>LB E★WORKS McLaren 720s Complete Body Kit</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div>
                  <p>$39,050.00</p>
                  <p>$58,190.00</p>
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

          <div className="w-72 h-[420px] bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2023/05/Liberty-Walk-Nissan-Z-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 text-lg font-semibold">NISSAN</p>
                <p>LB E★WORKS Nissan Z RZ34 (400Z) Body Kit (2023+)</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div>
                  <p>$9,328.00</p>
                  <p>$11,583.00</p>
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

          <div className="w-72 h-[420px] bg-white p-5 relative shadow-md border-1">
            <img
              src="https://libertywalk.shop/wp-content/uploads/2023/01/Liberty-Walk-Lamborghini-Murcielago-Body-Kit-300x214.jpg"
              alt=""
              className="w-64 hover:scale-110 duration-300"
            />
            <div className="pt-4 text-2xl">
              <div className="font-Oswald">
                <p className="text-gray-700 text-lg font-semibold">LAMBORGHINI</p>
                <p>LB E★Silhouette WORKS Lamborghini Murcielago GT EVO</p>
              </div>
              <div className="flex font-Oswald pt-3">
                <div>
                  <p>$48,008.00</p>
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

        </div>
        </Marquee>
        
    </div>
  );
};

export default Release;