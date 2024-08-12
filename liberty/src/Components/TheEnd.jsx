import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const TheEnd = () => {
  return (
    <div className="h-auto mt-32 px-4 sm:px-8 md:px-16 lg:px-52">
      <img
        src="https://libertywalk.shop/wp-content/uploads/2022/12/75x75_lb.png"
        alt=""
        className="mb-3"
      />
      <div className="flex flex-col md:flex-row gap-8 md:gap-32 font-Oswald">
        <div className="flex-1 mt-10">
          <p className="my-3 text-lg text-gray-400 flex gap-2 items-center">
            <IoLocationSharp size={25} />
            www.LibertyWalk.Shop United States / Canada / North America
          </p>
          <p className="my-3 text-lg text-gray-400 flex gap-2 items-center">
            <IoIosCall size={25} /> (999) 999-999
          </p>
          <p className="my-3 text-lg flex gap-2 font-semibold items-center">
            <MdEmail size={25} className="text-gray-400" />{" "}
            info@libertywalk.shop
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <img
              src="https://libertywalk.shop/wp-content/plugins/tz-feature-pack//public/img/payment_icons/americanexpress-icon.png"
              alt=""
              className="cursor-pointer w-12 h-12"
            />
            <img
              src="https://libertywalk.shop/wp-content/plugins/tz-feature-pack//public/img/payment_icons/mastercard-icon.png"
              alt=""
              className="cursor-pointer w-12 h-12"
            />
            <img
              src="https://libertywalk.shop/wp-content/plugins/tz-feature-pack//public/img/payment_icons/paypal-icon.png"
              alt=""
              className="cursor-pointer w-12 h-12"
            />
            <img
              src="https://libertywalk.shop/wp-content/plugins/tz-feature-pack//public/img/payment_icons/visa-icon.png"
              alt=""
              className="cursor-pointer w-12 h-12"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-2 text-xl font-semibold">HELPFUL LINKS</p>
          <p className="my-3 text-md cursor-pointer">Installer</p>
          <p className="my-3 text-md cursor-pointer">
            LB★WORKS - LB★PERFORMANCE - LB★NATION
          </p>
          <p className="my-3 text-md cursor-pointer">LBWK News & Info</p>
          <p className="my-3 text-md cursor-pointer">
            Official Of Authenticity
          </p>
          <p className="my-3 text-md cursor-pointer">Sponsorship</p>
        </div>
        <div className="flex-1">
          <p className="mb-5 text-xl font-semibold">IMPORTANT LINKS</p>
          <p className="my-3 text-md cursor-pointer">Privacy Policy</p>
          <p className="my-3 text-md cursor-pointer">
            Shipping / Return / Refunds / Sales Tax
          </p>
          <p className="my-3 text-md cursor-pointer">Track My Order</p>
          <p className="my-3 text-md cursor-pointer">
            Website Terms and Condition of Use
          </p>
          <p className="my-3 text-md cursor-pointer">Appointments Only</p>
        </div>
      </div>
      <div className="text-sm font-Oswald mt-8 text-black/60">
        <p>
          AirREX is a registered trademark of Pin Hsiu Rubber Company Ltd.
          Nissan is a registered trademark of The Nissan Motor Company, Ltd.
          Ford is a registered trademark of Ford Motor Company. Infiniti is a
          registered trademark of Nissan Motor Company, Ltd. Lexus is a
          registered trademark of the Lexus Division of Toyota Motor Sales,
          U.S.A. Porsche is a registered trademark and copyright of Porsche Cars
          North America (PCNA). Honda is a registered Trademark of Honda Motor
          Corporation. Toyota is a registered trademark of Toyota Motor
          Corporation. Acura is a registered trademark of Honda Motor Company,
          Ltd. Scion is a registered trademark of Toyota Motor Corporation. Audi
          is a registered trademark of Audi Ag. Mercedes & Mercedes-Benz are
          registered trademarks of Daimler Ag. BMW is a registered trademark of
          Bavarian Motor Works Ag. Dodge is a registered trademark of FCA US
          LLC. Ferrari is a registered trademark of Ferrari NA And Ferrari SpA.
          Subaru is a registered trademark of Fuji Heavy Industries Ltd.
          Lamborghini is a registered trademark of Automobile Lamborghini SpA.
          Maserati is a registered trademark of Maserati NA And Maserati SpA.
          Mazda is a registered trademark of the Mazda Motor Corporation.
          Mclaren is a registered trademark of Mclaren Group, Working Uk. Mini
          Cooper is a registered trademark of Bayerische Motoren Werke
          Aktiengesellschaft (Joint Stock Company). Jeep is a registered
          trademark of FCA US LLC. Chevrolet is a registered trademark of the
          General Motors Company.
        </p>
        <p className="pb-5">
          LibertyWalk.shop has no affiliation with these
          aforementioned Registered Trademarks. These terms are used throughout
          LibertyWalk.shop for identification purposes <span className="underline">Only</span>.
        </p>
        <p className="pb-5">
          LibertyWalk.shop ©
          2024, an affiliate of Motorsport Partners | Site Map
        </p>
        <p className="pb-5">
          CA Residents:
          WARNING: Cancer and Reproductive Harm - www.P65Warnings.ca.gov
        </p>
      </div>
    </div>
  );
};

export default TheEnd;
