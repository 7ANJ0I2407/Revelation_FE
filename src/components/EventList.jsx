import React, { useState, useEffect } from "react";
import NormalDayLeft from "./NormalDayLeft";
import NormalDayRight from "./NormalDayRight";
import HighlightedDay from "./HighlightedDay";

const eventSchedule = [
    {
        day: "DAY-1",
        date: "March 21st, 2025",
        events: [
            { name: "Inauguration", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" },
            { name: "Quetam", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" },
            { name: "Hackathon", time: "09:00 AM - 10:00 AM", isLive: true, gif: "vite.svg" }
        ]
    },
    {
        day: "DAY-2",
        date: "March 22nd, 2025",
        events: [
            { name: "Root Access", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" },
            { name: "BLOOD DONATION CAMP", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" },
            { name: "BrainDead", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" }
        ]
    },
    {
        day: "DAY-3",
        date: "March 23rd, 2025",
        events: [
            { name: "BLOOD DONATION CAMP", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" },
            { name: "Valedictory", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" },
            { name: "Codestorm", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" }
        ]
    }
];


const EventList = () => {
    const [highlighted, setHighlighted] = useState(eventSchedule[0]);
    const [liveEvent, setLiveEvent] = useState(null);
    const [normalDays, setNormalDays] = useState([eventSchedule[1], eventSchedule[2]]);

    useEffect(() => {
        let foundLiveEvent = null;
        for (const day of eventSchedule) {
            for (const event of day.events) {
                if (event.isLive) {
                    foundLiveEvent = event;
                    break;
                }
            }
            if (foundLiveEvent) break;
        }
        setLiveEvent(foundLiveEvent);
    }, []);

    const handleHighlighting = (selectedDay) => {
        setHighlighted(selectedDay);
        // console.log(hello);
        const dayToBeNormalised = [];

        eventSchedule.forEach((d) => {
            if(d.day !== selectedDay.day){
                dayToBeNormalised.push(d);
            }
        })

        setNormalDays(dayToBeNormalised);
        console.log(highlighted);
        console.log(normalDays);
    }

    return (
        <div className="relative w-screen min-h-[90vh] bg-[url('public/grid.png')] bg-cover bg-center flex flex-col items-center justify-center p-6">
        {/* Background Grid Effect */}
    
      
        {/* Header Section (Navbar Space Preserved) */}
        <h2 className="text-white text-xl font-bold tracking-wide uppercase text-center">
          Explore the Marvellous </h2>
        <h1 className="text-red-500 text-5xl">EVENTS</h1>
      
        {/* Download Button & Live Announcement */}
        <div className="mt-4 flex flex-col items-center">
          <button className="px-6 py-2 border-2 border-red-500 text-white text-lg font-bold rounded-md hover:bg-red-500 transition">
            DOWNLOAD SCHEDULE
          </button>
          <div className="mt-2 text-red-500 text-sm font-bold px-4 py-2 rounded-md">
            LIVE <span className="text-white">Blood Donation Camp is live now!</span>
          </div>
        </div>
      
        {/* 🔥 Event Cards Grid */}
        <div className="grid grid-cols-3 gap-12 mt-6 w-full px-12">
          {/* Left Normal Day (Smaller) */}
          
          <div className="w-full h-[55vh] flex justify-center items-center" onClick={() => handleHighlighting(normalDays[0])}>
          <div className="relative" >
          <div className="absolute inset-0 bg-white rounded-lg blur"></div>
          <div className="relative" >
            <NormalDayLeft inday={normalDays[0]} key={normalDays[0].day} />
          </div>
          </div>  
          </div>
          
      
          {/* Center Highlighted Day (Smaller) */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 rounded-lg blur-xl"></div>
            <div className="w-full h-[65vh] flex justify-center items-center relative">
                <HighlightedDay inday={highlighted} />
            </div>
          </div>
          
      
          {/* Right Normal Day (Smaller) */}
          <div className="w-full h-[55vh] flex justify-center items-center" onClick={() => handleHighlighting(normalDays[1])}>
          <div className="relative" >
          <div className="absolute inset-0 bg-white rounded-lg blur"></div>
          <div className="relative" >
            <NormalDayRight inday={normalDays[1]} key={normalDays[1].day} />
          </div>
          </div>
          </div>
        </div>
      </div>
      
    );
};

export default EventList;