import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import events from "@/data/eventData";
import { Nanum_Myeongjo } from "next/font/google";

// Assuming Nanum_Myeongjo is imported correctly as shown in the provided code.
const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: "400",
});

export default function UpcomingEvents() {
  const [sectionHeight, setSectionHeight] = useState("auto");

  return (
    <section
      className={`${nanumMyeongjo.className} bg-[#f4e6e3] relative overflow-hidden pb-4`}
    >
      <div className="container mx-auto px-4 lg:mt-4 mt-16">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Upcoming Events
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {events.slice(0, 3).map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden text-center w-full sm:w-4/5 md:w-2/3 lg:w-1/3"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-gray-500">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center justify-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center justify-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                {event.rsvpLink && (
                  <Button className="w-full mt-6" asChild>
                    <a
                      href={event.rsvpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RSVP Now
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
