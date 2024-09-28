import React, { useState } from "react";

const Appointment = ({setShowAppointment}) => {
  // Define state for selected day and time
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");

  // Dummy data for days and time slots
  const days = [
    { day: "SAT", date: 28 },
    { day: "SUN", date: 29 },
    { day: "MON", date: 30 },
    { day: "TUE", date: 1 },
    { day: "WED", date: 2 },
    { day: "THU", date: 3 },
    { day: "FRI", date: 4 },
  ];

  const timeSlots = [
    "05:30 pm",
    "06:30 pm",
    "07:00 pm",
    "07:30 pm",
    "08:00 pm",
    "08:30 pm",
  ];

  // Handle the day and time selection
  const handleDaySelect = (index) => {
    setSelectedDay(index);
    setSelectedTime(""); // Reset time when day changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    };
    const bookingHandle = () => {
        alert(`your slot is booked on  ${days[selectedDay].day} date is ${days[selectedDay].date} at ${selectedTime} `)
        setShowAppointment(false);
    }

  return (
      <div className="py-4 text-[gray] max-w-full sm:max-w-2xl text-sm ">
      {/* Days Selection */}
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-4">
        {days.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer p-2 rounded-md transition-colors duration-100 w-full text-center ${
              selectedDay === index
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 border border-[gray]"
            }`}
            onClick={() => handleDaySelect(index)}
          >
            <span className="font-semibold">{item.day}</span>
            <span>{item.date}</span>
          </div>
        ))}
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
        {timeSlots.map((slot, index) => (
          <div
            key={index}
            className={`px-6 py-2 border rounded-md cursor-pointer transition-colors duration-100   w-full text-center ${
              selectedTime === slot
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-[gray]"
            }`}
            onClick={() => handleTimeSelect(slot)}
          >
            {slot}
          </div>
        ))}
      </div>

      {/* Book Appointment Button */}
      <button
        className="md:w-1/2 w-full bg-primary text-white py-3 rounded-lg text-center font-semibold hover:bg-primary transition-colors duration-100"
        disabled={!selectedTime} onClick={bookingHandle}
      >
        {selectedTime ? `Book appointment at ${selectedTime}` : "Book an appointment"}
      </button>
    </div>
  );
};

export default Appointment;
