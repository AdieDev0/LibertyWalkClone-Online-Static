import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Install = () => {
  return (
    <div className="h-auto px-48 py-9">
      <div>
        <p className="text-6xl text-center font-Matemasie">
          ★ Auto Body Shops & Installers ★
        </p>
        <div className="flex pt-9 ">
          <img
            src="https://libertywalk.shop/wp-content/uploads/2022/12/ferrari-f40-liberty-walk.jpg"
            alt=""
            className="w-[350px]"
          />
          <div className="flex-col mx-5 ">
            <p className="text-xl font-Oswald font-medium uppercase">
              find quality installers and professional auto body shops that
              specialize in luxury, exotic, performance and wide body
              installation.
            </p>
            <hr className="border-b border-black/60 my-3" />
            <p className="text-xl font-Oswald text-black/80 mt-9">
              The following businesses are{" "}
              <span className="font-bold text-black">highly-recommended</span>{" "}
              by the LibertyWalk.shop staff based on their reviews, skill level,
              experience and overall execution of widebody installations. These
              trusted Auto Body professionals would be happy to assist you in
              building your Liberty Walk dream. Be sure to let them know you
              found them at LibertyWalk.shop!
            </p>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="pt-5 font-Oswald text-md text-center">
        <div className="flex gap-1">
          <button className="border bg-black text-white w-[223px] h-14 rounded-md uppercase">
            Arizona
          </button>
          <button className="border bg-black text-white w-[223px] h-14 rounded-md uppercase">
            California
          </button>
          <button className="border bg-black text-white w-[223px] h-14 rounded-md uppercase">
            Florida
          </button>
          <button className="border bg-black text-white w-[223px] h-14 rounded-md uppercase">
            Georgia
          </button>
          <button className="border bg-black text-white w-[223px] h-14 rounded-md uppercase">
            Hawaii
          </button>
        </div>
        <div className="flex gap-1 mt-1">
          <button className="border bg-black text-white w-[223px] h-14 rounded-md uppercase">
            Illinois
          </button>
          <button className="border bg-black text-white w-[223px] h-14 rounded-md uppercase">
            Missouri
          </button>
          <button className="border bg-black text-white w-[223px] h-14 rounded-md uppercase">
            New York / new jersey
          </button>
          <button className="border bg-black text-white w-[223px] h-14 rounded-md uppercase">
            Texas
          </button>
          <button className="border bg-lime-600 text-white w-[223px] h-14 rounded-md uppercase">
            register
          </button>
        </div>
      </div>

      {/* long card */}

      {/* solo */}
      <div className="h-auto bg-zinc-200 mt-9 font-Oswald">
        <div className="p-2">
          <p className="bg-black text-white w-auto h-22 text-6xl p-4 uppercase font-medium">
            Arizona
          </p>
          <div className="flex-col px-3 py-8 text-lg">
            <p>Elite Automotive Finishes</p>
            <p>1045 W Broadway Rd Suite 8, Mesa, AZ 85210</p>
            <p>(480) 644-0060</p>
            <p className="cursor-pointer hover:text-red-500 duration-500">
              www.makeitelite.com
            </p>
            <p className="cursor-pointer hover:text-red-500 duration-500">
              @eafinishes
            </p>
          </div>
        </div>
        {/* Double */}
        <div className="p-2">
          <p className="bg-black text-white w-auto h-22 text-6xl p-4 uppercase font-medium">
            California
          </p>
          <div className="flex gap-56">
            <div className="flex-col px-3 py-8 text-lg">
              <p>Auto Explosion Auto Body (ask for Damian)</p>
              <p>13805 Normandie Ave, Gardena, CA 90249</p>
              <p>(310) 329-6691</p>
              <p className="cursor-pointer hover:text-red-500 duration-500">
                www.autoexplosionbodyshop.com
              </p>
              <p className="cursor-pointer hover:text-red-500 duration-500">
                @autoexplosion310
              </p>
            </div>

            <div className="flex-col px-3 py-8 text-lg">
              <p>Auto Explosion Auto Body (ask for Damian)</p>
              <p>13805 Normandie Ave, Gardena, CA 90249</p>
              <p>(310) 329-6691</p>
              <p className="cursor-pointer hover:text-red-500 duration-500">
                www.autoexplosionbodyshop.com
              </p>
              <p className="cursor-pointer hover:text-red-500 duration-500">
                @autoexplosion310
              </p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <p className="bg-black text-white w-auto h-22 text-6xl p-4 uppercase font-medium">
            FLORIDA
          </p>
          <div className="flex-col px-3 py-8 text-lg">
            <p>Malihini Customs</p>
            <p>8802 Corporate Square Ct, Jacksonville, FL 32216</p>
            <p>(904) 537-4807</p>
            <p className="cursor-pointer hover:text-red-500 duration-500">
              @malihinicustoms
            </p>
          </div>
        </div>
        <div className="p-2">
          <p className="bg-black text-white w-auto h-22 text-6xl p-4 uppercase font-medium">
            GEORGIA
          </p>
          <div className="flex-col px-3 py-8 text-lg">
            <p>Elite Restomods</p>
            <p>204 White Park Dr, Dallas GA 30132</p>
            <p>(404) 406-9149</p>
            <p>(ask for Wayne)</p>
          </div>
        </div>
        <div className="p-2">
          <p className="bg-black text-white w-auto h-22 text-6xl p-4 uppercase font-medium">
            HAWAII
          </p>
          <div className="flex-col px-3 py-8 text-lg">
            <p>2020 Auto Body LLC</p>
            <p>2855 Kaihikapu St, Honolulu, HI 96819</p>
            <p>(808) 836-1693</p>
            <p className="cursor-pointer hover:text-red-500 duration-500">
              www.2020autobody.net
            </p>
            <p className="cursor-pointer hover:text-red-500 duration-500">
              @2020autobody
            </p>
          </div>
        </div>

        {/* Triple */}
        <div className="p-2">
          <p className="bg-black text-white w-auto h-22 text-6xl p-4 uppercase font-medium">
            ILLINOIS
          </p>
          <div className="flex gap-40">
            <div className="flex-col px-3 py-8 text-lg">
              <p>Prestige Auto Interiors & Convertible Tops</p>
              <p>322 W Ogden Ave, Westmont, IL 60559</p>
              <p>(630) 297-8044</p>
              <p className="cursor-pointer hover:text-red-500 duration-500">
                www.prestigeautointeriors.com
              </p>
              <p className="cursor-pointer hover:text-red-500 duration-500">
                @prestige_auto_interiors
              </p>
            </div>

            <div className="flex-col px-3 py-8 text-lg">
              <p>Black Star</p>
              <p>358 Lexington Dr, Buffalo Grove, IL 60089</p>
              <p>(847) 796-6900</p>
              <p className="cursor-pointer hover:text-red-500 duration-500">
                @goblackstar
              </p>
            </div>

            <div className="flex-col px-3 py-8 text-lg">
              <p>Big Boost Performance</p>
              <p>1432 Bolingbrook Dr, Romeoville, IL 60446</p>
              <p>(708) 465-1299</p>
              <p className="cursor-pointer hover:text-red-500 duration-500">
                www.bigboostperformance.us
              </p>
              <p className="cursor-pointer hover:text-red-500 duration-500">
                @bigboostperformance_
              </p>
            </div>
          </div>
        </div>

        <div className="p-2">
          <p className="bg-black text-white w-auto h-22 text-6xl p-4 uppercase font-medium">
            MISSOURI
          </p>
          <div className="flex-col px-3 py-8 text-lg">
            <p>Modern Motorcars Auto Body & Collision Center</p>
            <p>1284 Bryan Dr, Nixa, MO 65714</p>
            <p>(417) 881-3080</p>
            <p className="cursor-pointer hover:text-red-500 duration-500">
              www.modernmotorcars.com
            </p>
            <p className="cursor-pointer hover:text-red-500 duration-500">
              @modernmotorcars
            </p>
          </div>
        </div>

        <div className="p-2">
          <p className="bg-black text-white w-auto h-22 text-6xl p-4 uppercase font-medium">
            NEW YORK / NEW JERSEY
          </p>
          <div className="flex gap-56">
            <div className="flex-col px-3 py-8 text-lg">
              <p>ABUSHI</p>
              <p>44-03 56th Rd, Queens, NY 11378</p>
              <p>(718) 729-5300</p>
              <p className="cursor-pointer hover:text-red-500 duration-500">
                www.abushi.com
              </p>
              <p className="cursor-pointer hover:text-red-500 duration-500">
                @abushi
              </p>
            </div>

            <div className="flex-col px-3 py-8 text-lg">
              <p>Vilar Auto Body Inc (ask for Pedro)</p>
              <p>936 E Elizabeth Ave, Linden, NJ 07036</p>
              <p>(908) 587-2585</p>
              <p className="cursor-pointer hover:text-red-500 duration-500">
                @vilarautobodyinc
              </p>
            </div>
          </div>
        </div>

        <div className="p-2">
          <p className="bg-black text-white w-auto h-22 text-6xl p-4 uppercase font-medium">
            TEXAS
          </p>
          <div className="flex-col px-3 py-8 text-lg">
            <p>I Autowork</p>
            <p>12119 FM917 suite K, Alvarado, TX 76009</p>
            <p>(469) 274-4000</p>
            <p className="cursor-pointer hover:text-red-500 duration-500">
              www.iautowork.net
            </p>
            <p className="cursor-pointer hover:text-red-500 duration-500">
              @iautowork
            </p>
          </div>
        </div>
      </div>

      {/* TheENd */}
      <div className="pt-16">
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
            U.S.A. Porsche is a registered trademark and copyright of Porsche
            Cars North America (PCNA). Honda is a registered Trademark of Honda
            Motor Corporation. Toyota is a registered trademark of Toyota Motor
            Corporation. Acura is a registered trademark of Honda Motor Company,
            Ltd. Scion is a registered trademark of Toyota Motor Corporation.
            Audi is a registered trademark of Audi Ag. Mercedes & Mercedes-Benz
            are registered trademarks of Daimler Ag. BMW is a registered
            trademark of Bavarian Motor Works Ag. Dodge is a registered
            trademark of FCA US LLC. Ferrari is a registered trademark of
            Ferrari NA And Ferrari SpA. Subaru is a registered trademark of Fuji
            Heavy Industries Ltd. Lamborghini is a registered trademark of
            Automobile Lamborghini SpA. Maserati is a registered trademark of
            Maserati NA And Maserati SpA. Mazda is a registered trademark of the
            Mazda Motor Corporation. Mclaren is a registered trademark of
            Mclaren Group, Working Uk. Mini Cooper is a registered trademark of
            Bayerische Motoren Werke Aktiengesellschaft (Joint Stock Company).
            Jeep is a registered trademark of FCA US LLC. Chevrolet is a
            registered trademark of the General Motors Company.
          </p>
          <p className="pb-5">
            LibertyWalk.shop has no affiliation with these aforementioned
            Registered Trademarks. These terms are used throughout
            LibertyWalk.shop for identification purposes{" "}
            <span className="underline">Only</span>.
          </p>
          <p className="pb-5">
            LibertyWalk.shop © 2024, an affiliate of Motorsport Partners | Site
            Map
          </p>
          <p className="pb-5">
            CA Residents: WARNING: Cancer and Reproductive Harm -
            www.P65Warnings.ca.gov
          </p>
        </div>
      </div>
    </div>
  );
};

export default Install;
