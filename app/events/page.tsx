import Iframe from "react-iframe";

const page = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="text-center justify-center mx-4 lg:mx-16 pt-4">
          <h1>Upcoming Events!</h1>
          <div className="flex justify-center">
            <Iframe
              url="https://calendar.google.com/calendar/embed?src=7hptoesel85ltt2ndeg0dtptec%40group.calendar.google.com&ctz=America%2FLos_Angeles"
              width="800"
              height="800"
              className="mb-8 border-solid 1px border-[#777]"
            ></Iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
