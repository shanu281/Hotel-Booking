import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import ScrollToTop from "../components/ScrollToTop";
import { RoomContext } from "../context/RoomContext";
import { FaCheck } from "react-icons/fa";
import { Button, Modal } from 'antd';



const RoomDetails = () => {
 
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();
  
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  const { name, description, facilities, imageLg, price } = room;

  // Sucess Modal 
  const [modal, contextHolder] = Modal.useModal();
  const countDown = () => {
    let secondsToGo = 5;
    const instance = modal.success({
      title: 'Booking Confirmed',
      content: 'Thank you, Your room has been booked',
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: `Have a pleasent stay`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };
  
  return (
    <section>
      <ScrollToTop />
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70"></div>
        {/* Title */}
        <h1 className="text-white text-6xl z-20 font-primary text-center">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left */}
          <div className="w-full h-full lg:w-[60%]">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" src={imageLg} alt="room-pic" />
            {/* facilities */}
            <div className="mt-12">
              <h3 className="h3 mb-3"> Room facilities</h3>
              <p className="mb-12"></p>
              {/* Grid  */}
              <div className="grid grid-cols-3 gap-6 mb-12 ">
                {facilities.map((e, i) => {
                  const { name, icon } = e;
                  return (
                    <div className="flex items-center gap-x-3 flex-1">
                      <div className="text-3xl text-acceent ">{icon}</div>
                      <div className="text-base text-acceent ">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-full lg:w-[40%]">
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4 ">
                <h3>Your Reservation</h3>
                <div className="h-[60px]" >
                  <CheckIn />
                </div>
                <div className="h-[60px]">
                  <CheckOut />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div>
              </div>
              <button onClick={countDown} className="btn btn-lg btn-primary w-full" >
                text Book now for ₹ {price*50}
              </button>
            </div>
            {/* Rules */}
            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea
                placeat eos sed voluptas unde veniam eligendi a.
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Chech-in 12:00 pm Check-out 11:30 am
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  OutSide food not allowed
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Unmarried Couples are allowed
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  ID Mandatory
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Pets not allowed
                </li>
              </ul>
            </div>
            {contextHolder}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
