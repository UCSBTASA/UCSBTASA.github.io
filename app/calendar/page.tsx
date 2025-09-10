import Iframe from "react-iframe";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-4 lg:px-16 pt-4">
      {/* For medium and smaller: only show Agenda */}
      <div className="block md:hidden">
        <Iframe
          url="https://calendar.google.com/calendar/embed?src=7hptoesel85ltt2ndeg0dtptec%40group.calendar.google.com&ctz=America%2FLos_Angeles&mode=AGENDA"
          width="100%"
          height="800"
          className="mb-8"
        />
      </div>

      {/* For large screens and up: 75% calendar + 25% agenda */}
      <div className="hidden md:flex flex-row gap-4">
        {/* Left: Calendar */}
        <div className="w-1/2 lg:w-3/5 xl:w-3/4">
          <Iframe
            url="https://calendar.google.com/calendar/embed?src=7hptoesel85ltt2ndeg0dtptec%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            width="100%"
            height="800"
            className="mb-8 "
          />
        </div>

        {/* Right: Agenda */}
        <div className=" w-1/2 lg:w-2/5 xl:w-1/4">
          <Iframe
            url="https://calendar.google.com/calendar/embed?src=7hptoesel85ltt2ndeg0dtptec%40group.calendar.google.com&ctz=America%2FLos_Angeles&mode=AGENDA"
            width="100%"
            height="800"
            className="mb-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default page;
