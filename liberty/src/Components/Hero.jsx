import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const Hero = () => {
  const slides = [
    { URL: "https://wallpapercave.com/wp/wp10629348.jpg" },
    {
      URL: "https://libertywalk-eu.com/cdn/shop/products/2_12600e20-16d3-4096-ab1d-2a1671675532.jpg?v=1674730750&width=1946",
    },
    {
      URL: "https://libertywalk.co.jp/wp-content/uploads/2023/02/LB-WORKS-FERRARI-F4000004.jpg",
    },
    {
      URL: "https://cdn.motor1.com/images/mgl/kL8pe/s1/liberty-walk-mclaren-650s.jpg",
    },
    {
      URL: "https://smartcdn.gprod.postmedia.digital/driving/wp-content/uploads/2024/01/widebody-lamborghini-countach-by-liberty-walk-TAkinshete-01.jpg",
    },
    {
      URL: "https://maxtuncars.com/wp-content/uploads/Toyota-SUPRA-A90-Wide-Body-Liberty-Walk-2-1.jpg",
    },
    {
      URL: "https://i.pinimg.com/originals/30/c0/b3/30c0b3afa580eeea0ecdca98064e1c5a.jpg",
    },
    {
      URL: "https://libertywalk.co.jp/wp-content/uploads/2022/11/LB-WORKS-Lamborghini-HURACAN00004-1.jpg",
    },
    {
      URL: "https://libertywalk.co.jp/wp-content/uploads/2022/11/PORSCHE-997_00001.jpg",
    },
    {
      URL: "https://libertywalk.co.jp/wp-content/uploads/2023/01/LB-Super-Silhouette-MAZDA-FD3S-RX-700018.jpg",
    },
    {
      URL: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/04/Toyota-Supra-Liberty-Walk-2-Cropped.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    // Picture
    <div className="max-w-full w-full mx-auto relative mb-5">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].URL})` }}
        className="relative w-full h-[350px] sm:h-[590px] bg-center bg-cover bg-no-repeat duration-500"
      ></div>
      {/* React marquee */}
      <Marquee className="bg-black font-semibold text-md lg:text-3xl md:text-2xl">
        <div className="text-white font-Oswald p-2 rounded-lg uppercase">
          lamborghini countach
        </div>
        <div className="text-yellow-500 font-Oswald p-2 rounded-lg uppercase ">
          GR SUPRA
        </div>
        <div className="text-white font-Oswald p-2 rounded-lg uppercase">
          Porsche 997
        </div>
        <div className="text-yellow-500 font-Oswald p-2 rounded-lg uppercase">
        NISSAN SILVIA S15
        </div>
        <div className="text-white font-Oswald p-2 rounded-lg uppercase">
          SKYLINE R34
        </div>
        <div className="text-yellow-500 font-Oswald p-2 rounded-lg uppercase">
          SRT HELLCAT
        </div>
        <div className="text-white font-Oswald p-2 rounded-lg uppercase">
        Ferrari F40
        </div>
        <div className="text-yellow-500 font-Oswald p-2 rounded-lg uppercase">
        MAZDA RX-7
        </div>
        <div className="text-white font-Oswald p-2 rounded-lg uppercase">
        Lamborghini-HURACAN
        </div>
        <div className="text-yellow-500 font-Oswald p-2 rounded-lg uppercase">
        mclaren-650
        </div>
      </Marquee>
    </div>
  );
};

export default Hero;
