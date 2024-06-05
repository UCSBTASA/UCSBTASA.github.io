import FadeInTransition from "./scroll-transition";
import events from "../data/eventData";

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
    const numToDay = (num: number) => {
      num = (num % 7) + 1;
      switch (num) {
        case 0:
          return "Sunday";
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        default:
          return "Saturday";
      }
    };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    const dayOfWeek = numToDay(new Date(date).getDay());
    return dayOfWeek + ", " + formattedDate;
  };

  const currentDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() - 1);

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= futureDate
  );

  return (
    <div className="bg-gray-100 py-12 rounded-2xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Upcoming Events
        </h2>

        {upcomingEvents.length === 0 ? (
          <div className="w-72">
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <p className="text-lg text-gray-600">
                No events yet, check back soon!
              </p>
            </div>
          </div>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-2">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-lg"
              >
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Date: </strong> {formatDate(event.date)}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Time: </strong>
                    {event.customTime === "" ? (
                      <span>{event.time} PST</span>
                    ) : (
                      event.customTime
                    )}
                  </p>
                  <p className="text-gray-600">
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
