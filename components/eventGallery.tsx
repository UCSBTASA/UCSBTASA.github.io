import events from "../data/eventData";
import { galleryImages2024_2025 } from "@/data/galleryImages";
import Image from "next/image";
import Link from "next/link";

const EventGallery = () => {
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
  const galleryImages = [...galleryImages2024_2025].reverse();
  
  console.log(galleryImages);
  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= futureDate
  );
  upcomingEvents.forEach((event) => {
    event.title = event.title.toLowerCase();
  });
  return (
    <div className="justify-center mx-auto">
      <div className="bg-gray-50 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {galleryImages.slice(0, 2).map((image) => (
            <div key={image.id} className="justify-center border">
              <Link href={image.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={image.imageUrl}
                  alt={image.title.toLowerCase()}
                  width={400} // Adjust width as needed
                  height={200} // Adjust height as needed
                  className="w-full h-auto rounded-lg object-cover"
                  style={{
                    objectFit: "cover",
                    aspectRatio: "16/9", // Dynamic aspect ratio
                  }}
                />
              </Link>
              <div className="bg-white py-2">
                <h3 className="font-semibold text-center text-lg md:text-xl">
                  {image.title.toLowerCase()}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {galleryImages.slice(2, 4).map((image) => (
              <div key={image.id} className="relative border">
                <Link
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={image.imageUrl}
                    alt={image.title}
                    width={500} // Adjust width as needed
                    height={300} // Adjust height as needed
                    className="w-full h-auto rounded-lg object-cover"
                    style={{
                      objectFit: "cover",
                      aspectRatio: 16 / 9,
                      // Dynamic aspect ratio
                    }}
                  />
                </Link>
                <div className="bg-white py-2">
                  <h3 className="font-semibold text-center text-lg md:text-xl">
                    {image.title.toLowerCase()}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
