import React from "react";
import Card from "./Card";

const Hero = () => {
  const handleView = () => {
    window.location.href = "/employees";
  };
  const handleAddEmployee = () => {
    window.location.href = "/register";
  };

  return (
    <main className="flex flex-col items-center py-8">
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Welcome to the Employee Management System
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Our Employee Management System (EMS) streamlines HR processes and
          boosts productivity. Easily manage records, track performance, and
          generate reports. Add, view, update, and delete employee information
          with ease. Stay organized and ensure peak efficiency.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          heading={"Generate Report"}
          desc={"Access all employee details in one place."}
          btnName={"View"}
          handleClick={handleView}
        />
        <Card
          heading={"Register"}
          desc={"Add a new team member quickly."}
          btnName={"Add"}
          handleClick={handleAddEmployee}
        />
      </section>
    </main>
  );
};

export default Hero;
