import React from "react";
import DogImg from "../assets/img/dogs/dog-appointment.png";

const Appointment = () => {
  return (
    <section className="bg-yellow-secondary py-12 lg:pb-12 lg:mt-32 relative min-h-[584px]">
      <div>
        <div>
          {/* image */}
          <div className="hidden w-full max-w-[790px] mx-auto lg:flex justify-center">
            <img src={DogImg} alt="" />
          </div>
          {/* form */}
          <from
            className="bg-yellow py-8 px-6 w-full max-w-[790px] h-[500px]
           mx-auto lg:-mt-5 rounded-[60px] text-center flex flex-col justify-start items-center gap-y-4"
          >
            <h2 className="h2 my-4 ">Get an appointment</h2>
            <input
              type="text"
              className="input-control"
              placeholder="Full name"
            />
            <input
              type="text"
              className="input-control"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="input-control"
              placeholder="Phone number"
            />
            <button className="btn w-full max-w-[514px]">Send</button>
          </from>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
