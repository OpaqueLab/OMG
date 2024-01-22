import React from "react";
import Marquee from "react-fast-marquee";

const Person = () => {
  return (
    <div className=" bg-black flex flex-col items-center gap-16">
      <h1 className="text-5xl text-white font-bold text-center">OUR TEAM</h1>
      <Marquee autoFill={true} direction="right">
        <div className=" lg:mx-20 mx-5 flex flex-col">
          <div className="w-20 h-20 bg-red-500"></div>
          <p className="text-white">asgag</p>
        </div>
        <div className=" lg:mx-20 mx-5 flex flex-col">
          <div className="w-20 h-20 bg-red-500"></div>
          <p className="text-white">asgag</p>
        </div>
        <div className=" lg:mx-20 mx-5 flex flex-col">
          <div className="w-20 h-20 bg-red-500"></div>
          <p className="text-white">asgag</p>
        </div>
        <div className=" lg:mx-20 mx-5 flex flex-col">
          <div className="w-20 h-20 bg-red-500"></div>
          <p className="text-white">asgag</p>
        </div>
        <div className=" lg:mx-20 mx-5 flex flex-col">
          <div className="w-20 h-20 bg-red-500"></div>
          <p className="text-white">asgag</p>
        </div>
      </Marquee>
    </div>
  );
};

export default Person;
