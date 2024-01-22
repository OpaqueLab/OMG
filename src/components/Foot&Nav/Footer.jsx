import React from "react";

const Footer = () => {
  return (
    <div className=" w-full text-black bg-gray-300 mt-20 flex flex-col item-center py-5 border-b-4 border-purple-800 ">
      <div className="lg:w-[85%] w-full self-center flex flex-col gap-5 lg:gap-10 justify-center items-center  ">
        <div className="flex justify-around w-full text-[8px] lg:text-base">
          <p>FACEBOOK</p>
          <p>INSTAGRAM</p>
          <p>TWITTER</p>
          <p>LINKEDIN</p>
          <p>WHATSAPP</p>
        </div>
        <div className="flex justify-around w-full text-[8px] lg:text-base">
          <p>OMG PORTAL</p>
          <p>LABELS & BRANDS</p>
          <p>AUSPICIOUS MUSIC</p>
          <p>SUBMISSION</p>
        </div>
        <div className="flex justify-around w-full text-[8px] lg:text-base">
          <p>LICENSCING</p>
          <p>REQUEST</p>
          <p>WORK WITH US</p>
          <p>CONTACT US</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
