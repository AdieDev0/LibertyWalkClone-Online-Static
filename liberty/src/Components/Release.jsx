import React from "react";
import Marquee from "react-fast-marquee";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const products = [
  {
    brand: "TESLA",
    title: "LB E★WORKS Tesla 3 Body Kit",
    price: ["$6,720.00", "$7,920.00"],
    img: "https://libertywalk.shop/wp-content/uploads/2024/08/454721079_18448537441059794_7705988934792849966_n-300x214.jpg",
    icon: <IoSearchOutline size={30} className="hover:text-red-800 duration-300" />,
  },
  {
    brand: "NISSAN",
    title: "LB E★WORKS Nissan Z RZ34 (400Z) Body Kit (2023+)",
    price: ["$9,328.00", "$11,583.00"],
    img: "https://libertywalk.shop/wp-content/uploads/2023/05/Liberty-Walk-Nissan-Z-300x214.jpg",
    icon: <IoSearchOutline size={30} className="hover:text-red-800 duration-300" />,
  },
  {
    brand: "LAMBORGHINI",
    title: "LB E★Silhouette WORKS Lamborghini Murcielago GT EVO",
    price: ["$48,008.00"],
    img: "https://libertywalk.shop/wp-content/uploads/2023/01/Liberty-Walk-Lamborghini-Murcielago-Body-Kit-300x214.jpg",
    icon: <PiShoppingCartSimpleLight size={30} className="hover:text-red-800 duration-300" />,
  },
  {
    brand: "LEXUS",
    title: "LB E★WORKS Lexus LX 600 Full Body Kit",
    price: ["$7,370.00", "$37,450.00"],
    img: "https://libertywalk.shop/wp-content/uploads/2020/04/LB-WORKS-LEXUS-LX600_00003-300x214.jpg",
    icon: <IoSearchOutline size={30} className="hover:text-red-800 duration-300" />,
  },
  {
    brand: "FERRARI",
    title: "LB E★WORKS Ferrari F8 Tributo Complete Body Kit",
    price: ["$30,470.00", "$50,050.00"],
    img: "https://libertywalk.shop/wp-content/uploads/2024/06/LB-WORKS-F8-Tributo-300x214.jpg",
    icon: <IoSearchOutline size={30} className="hover:text-red-800 duration-300" />,
  },
  {
    brand: "LAMBORGHINI",
    title: "LB E★WORKS Lamborghini Countouch",
    price: ["$42,350.00"],
    img: "https://libertywalk.shop/wp-content/uploads/2024/01/Countach_widebody-300x214.jpg",
    icon: <PiShoppingCartSimpleLight size={30} className="hover:text-red-800 duration-300" />,
  },
  {
    brand: "FORD",
    title: "LB E★WORKS Ford Bronco Fender Flares (2021+)",
    price: ["$3,080.00"],
    img: "https://libertywalk.shop/wp-content/uploads/2023/08/Ford-Bronco-Fender-Flares-Liberty-Walk-300x214.jpg",
    icon: <PiShoppingCartSimpleLight size={30} className="hover:text-red-800 duration-300" />,
  },
  {
    brand: "MCLAREN",
    title: "LB E★WORKS McLaren 720s Complete Body Kit",
    price: ["$39,050.00", "$58,190.00"],
    img: "https://libertywalk.shop/wp-content/uploads/2023/07/Liberty-Walk-McLaren-720S-300x214.jpg",
    icon: <IoSearchOutline size={30} className="hover:text-red-800 duration-300" />,
  },
];

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
      <Marquee pauseOnHover gradient={false}>
        <div className="flex gap-4 px-4">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="w-56 sm:w-60 lg:w-72 h-[370px] sm:h-[385px] lg:h-[420px] bg-white p-5 relative shadow-md border rounded-lg"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-[180px] object-contain hover:scale-110 duration-300"
              />
              <div className="pt-4">
                <div className="font-Oswald">
                  <p className="text-gray-700 font-semibold text-sm sm:text-md lg:text-lg">
                    {product.brand}
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl">{product.title}</p>
                </div>
                <div className="flex font-Oswald pt-3">
                  <div className="text-lg sm:text-xl lg:text-2xl">
                    {product.price.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  <div className="absolute bottom-8 right-5 text-gray-500 cursor-pointer">
                    {product.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Release;
