import React from "react";
import Marquee from "react-fast-marquee";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const products = [
  {
    brand: "CHEVROLET",
    title: "LB E★Silhouette WORKS Chevrolet Corvette C8 Body Kit",
    price1: "$19,580.00 -",
    price2: "$21,780",
    img: "https://libertywalk.shop/wp-content/uploads/2021/07/Liberty-Walk-C8-Corvette-Rear-Wing-Spoiler-300x214.jpg",
    icon: IoSearchOutline,
  },
  {
    brand: "BMW",
    title: "LB E★Works BMW M3 Ver.2 Wing (E92)",
    price1: "$1,550.00 -",
    price2: "$2,050.00",
    img: "https://libertywalk.shop/wp-content/uploads/2017/06/Liberty-Walk-BMW-M3-E92-Rear-Wing-Carbon-Fiber-300x214.jpg",
    icon: IoSearchOutline,
  },
  {
    brand: "FERRARI",
    title: "LB E★Silhouette WORKS Ferrari 458 GT Rear Wing",
    price1: "$8,640.00 -",
    price2: "$11,880.00",
    img: "https://libertywalk.shop/wp-content/uploads/2020/06/458_lbwk_7_ferrari-300x214.jpg",
    icon: IoSearchOutline,
  },
  {
    brand: "NISSAN",
    title: "LB E★Works Nissan GT-R R35 Type 2 Body Kit",
    price1: "$20,690.00 -",
    price2: "$26,900.00",
    img: "https://libertywalk.shop/wp-content/uploads/2017/06/LB%E2%98%85WORKS-NISSAN-GT-R-R35-TYPE-2-BODY-KIT-CANARDS-300x214.jpeg",
    icon: IoSearchOutline,
  },
  {
    brand: "FERRARI",
    title: "LB E★Works Ferrari 458 Rear Wing Ver.1",
    price1: "$8,700.00 -",
    price2: "$12,800.00",
    img: "https://libertywalk.shop/wp-content/uploads/2020/06/Liberty-Walk-Ferrari-458-Body-Kit-7-300x214.jpg",
    icon: IoSearchOutline,
  },
  {
    brand: "SUBARU",
    title: "LB E★Nation Subaru BRZ (ZD8) Rear GT Wing Ver.1",
    price1: "$2,530.00 -",
    price2: "$3,850.00",
    img: "https://libertywalk.shop/wp-content/uploads/2023/04/Subaru-BRZ-ZD8-Body-Kit-LB-Nation-300x214.jpg",
    icon: IoSearchOutline,
  },
  {
    brand: "NISSAN",
    title: "LB E★Works Nissan GT-R R35 Type 2 Hood",
    price1: "$1,620.00 -",
    price2: "$2,700.00",
    img: "https://libertywalk.shop/wp-content/uploads/2020/12/LIBERTY-WALK-NISSAN-GT-R-R35-TYPE-2-HOOD-300x214.jpeg",
    icon: IoSearchOutline,
  },
  {
    brand: "TOYOTA",
    title: "LB E★Works Toyota Supra (A90) Bonnet Hood",
    price1: "$3,080.00",
    img: "https://libertywalk.shop/wp-content/uploads/2020/06/liberty-walk-toyota-supra-wide-body-kit-a90-3-300x214.jpeg",
    icon: PiShoppingCartSimpleLight,
  },
  {
    brand: "INFINITI",
    title: "LB E★Nation Infiniti Q50 Front Bumper with Diffuser",
    price1: "$1,540.00 -",
    price2: "$2,090.00",
    img: "https://libertywalk.shop/wp-content/uploads/2020/09/LibertyWalk_Infiniti_Q50_Body_kit-300x214.jpeg",
    icon: IoSearchOutline,
  },
  {
    brand: "FERRARI",
    title: "LB E★WORKS Ferrari 348 Body Kit",
    price1: "$12,650.00",
    img: "https://libertywalk.shop/wp-content/uploads/2023/09/Ferrari-348-Liberty-Walk-300x214.jpg",
    icon: PiShoppingCartSimpleLight,
  },
  {
    brand: "FERRARI",
    title: "LB E★WORKS Ferrari F355 Rear Wing",
    price1: "$2,200.00",
    img: "https://libertywalk.shop/wp-content/uploads/2022/11/Ferrari-F355-LB-WORKS-Rear-Diffuser-300x214.jpg",
    icon: PiShoppingCartSimpleLight,
  },
  {
    brand: "DODGE",
    title: "LB E★WORKS Dodge Challenger Body Kit",
    price1: "$4,800.00 -",
    price2: "$5,780.00",
    img: "https://libertywalk.shop/wp-content/uploads/2020/07/LB-WORKS-DODGE-Challenger_10-scaled-1-300x214.jpg",
    icon: IoSearchOutline,
  },
];

const ProductCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="flex-shrink-0 w-60 h-[385px] lg:h-[420px] lg:w-72 bg-white p-5 relative shadow-md border">
      <img
        src={item.img}
        alt={item.brand}
        className="w-64 hover:scale-110 duration-300"
      />
      <div className="pt-4 text-2xl">
        <div className="font-Oswald">
          <p className="text-gray-700 font-semibold text-md lg:text-lg">
            {item.brand}
          </p>
          <p className="lg:text-2xl text-xl">{item.title}</p>
        </div>
        <div className="flex font-Oswald pt-3">
          <div className="text-xl lg:text-2xl">
            <p>{item.price1}</p>
            {item.price2 && <p>{item.price2}</p>}
          </div>
          <div className="absolute bottom-8 right-5 text-2xl text-gray-500 cursor-pointer">
            <Icon size={30} className="hover:text-red-800 duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

const TheMost = () => {
  return (
    <div className="w-full mt-7">
      <div className="font-Oswald text-3xl px-4 md:px-8 lg:px-[150px]">
        <p>
          <span className="font-bold">NEWEST</span> LBWK RELEASES
        </p>
      </div>
      <hr className="border-b border-black my-4" />

      {/* Mobile: Horizontal Scroll | Desktop: Marquee */}
      <div className="block lg:hidden overflow-x-auto no-scrollbar">
        <div className="flex gap-2 px-4">
          {products.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <Marquee pauseOnHover direction="right">
          <div className="flex gap-2">
            {products.map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TheMost;
