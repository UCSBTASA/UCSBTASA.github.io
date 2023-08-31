'use client'
import React from "react";
import Calendar from "@ericz1803/react-google-calendar"; // Make sure to install the package
import NavBar from "@/app/_components/navbar";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

const CalendarPage = () => {
  const API_KEY = "AIzaSyAseRAvL7ui7fqMWasarDQBoAYYbUjtnuc";
  const calendars = [
    { calendarId: "7hptoesel85ltt2ndeg0dtptec@group.calendar.google.com" },
    // You can add more calendar entries here if needed
  ];

  return (
    <div className="app-container">
      <Header title="UCSB TASA" /> {/* Adjust the title */}
      <NavBar />
      <div className="calendar-container">
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
      <Footer />
    </div>
  );
};

export default CalendarPage;

