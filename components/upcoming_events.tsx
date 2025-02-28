    import { Button } from "@/components/ui/button"
    import { CalendarDays, MapPin, Clock } from "lucide-react"
    import events from "@/data/eventData"
    export default function UpcomingEvents() {
        // const events = [
        //     {
        //         title: "Night Market 2024",
        //         date: "March 15, 2024",
        //         time: "6:00 PM - 9:00 PM",
        //         location: "Storke Plaza",
        //         rsvpLink: "https://example.com",  
        //     },
        //     {
        //         title: "Lunar New Year Celebration",
        //         date: "February 10, 2024",
        //         time: "5:00 PM - 8:00 PM",
        //         location: "Student Resource Building",
        //         rsvpLink: "https://example.com",  
        //     },
        //     {
        //         title: "Bubble Tea Social",
        //         date: "February 23, 2024",
        //         time: "3:00 PM - 5:00 PM",
        //         location: "UCen Hub",
        //         rsvpLink: "",  

        //     },
        // ]

        return (
            <section className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">Upcoming Events</h2>
                        {/* <p className="text-gray-600 leading-relaxed">
                            Join us for these exciting upcoming events! <br /> Don't forget to mark your calendars.
                        </p> */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center text-gray-500">
                                            <CalendarDays className="h-4 w-4 mr-2" />
                                            {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </div>    <div className="flex items-center text-gray-500">
                                            <Clock className="h-4 w-4 mr-2" />
                                            {event.time}
                                        </div>
                                        <div className="flex items-center text-gray-500">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            {event.location}
                                        </div>
                                    </div>
                                    {event.rsvpLink && (
                                        <Button className="w-full mt-6" asChild>
                                            <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer">RSVP Now</a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
