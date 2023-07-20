const events = [
  {
    id: 1,
    title: "Kickoff Meeting",
    date: "2023-09-30",
    time: "18:00",
    location: "Girvetz 1109",
  },
  {
    id: 2,
    title: "Big Little Pickup: Speed Dating",
    date: "2023-10-02",
    time: "14:00",
    location: "Lot 22",
  },
  {
    id: 3,
    title: "Big Little Pickup: Boba Mixer",
    date: "2023-10-05",
    time: "18:00",
    location: "TD-West",
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
      timeZone: "UTC", // Specify the timezone as UTC to prevent timezone conversion
    };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <strong>Time:</strong> {formatTime(event.time)} PST
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> {event.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
