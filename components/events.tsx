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
    const eventDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    };
    return eventDate.toLocaleDateString("en-US", options);
  };

  const currentDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() - 1);

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= futureDate
  );

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInTransition>
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
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <div className="w-full">
                  <div
                    key={event.title}
                    className="bg-white rounded-lg shadow p-4"
                  >
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
        </FadeInTransition>
      </div>
    </div>
  );
};

export default Events;
