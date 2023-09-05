import FadeInTransition from "./scroll-transition";

const events = [
  {
    id: 1,
    title: "99 Rising Tabling",
    date: "2023-09-27",
    startTime: "09:00",
    endTime: "14:00",
    location: "HSSB Courtyard",
  },
  {
    id: 2,
    title: "Fall Kickoff General Meeting",
    date: "2023-10-09",
    startTime: "20:00",
    endTime: "22:00",
    location: "Broida 1610",
  },
  {
    id: 3,
    title: "Big Little Pickup: Virtual Speed Dating",
    date: "2023-10-11",
    startTime: "20:00",
    endTime: "22:00",
    location: "Zoom",
  },
  {
    id: 4,
    title: "Big Little Pickup: In Person Speed Dating",
    date: "2023-10-13",
    startTime: "20:00",
    endTime: "22:00",
    location: "Lot 22 Top Flor",
  },
  {
    id: 5,
    title: "Big Little Pickup: Beach Day",
    date: "2023-10-21",
    startTime: "14:00",
    endTime: "16:00",
    location: "Goleta Beach",
  },
  {
    id: 6,
    title: "Big Little Pickup: Arts and Crafts Night",
    date: "2023-10-25",
    startTime: "20:00",
    endTime: "22:00",
    location: "SRB Multipurpose Room",
  },
];

const Events = () => {
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours, 10);
    const amPm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${amPm}`;
  };

  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInTransition>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow p-4">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Date:</strong> {formatDate(event.date)}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Time:</strong> {formatTime(event.startTime)} -{" "}
                  {formatTime(event.endTime)} PST
                </p>
                <p className="text-gray-600">
                  <strong>Location:</strong> {event.location}
                </p>
              </div>
            ))}
          </div>
        </FadeInTransition>
      </div>
    </div>
  );
};

export default Events;
