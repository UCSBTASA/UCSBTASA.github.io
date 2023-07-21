import NavBar from "../_components/navbar";
import Header from "../_components/header";
import Link from "next/link";

const About = () => {
  return (
    <div className="">
      <Header title="UCSB TASA"></Header>
      <NavBar></NavBar>
      <div className="bg-gray-100 h-screen">
        <div className="main-wrap flex justify-center">
          <div className="content p-16 m-4 w-[60%] box-border bg-[#f7f7f7]">
            <div id="textBlock" className="text-center">
              <h2 className="text-4xl">ABOUT US</h2>
              <p>
                The Taiwanese American Student Association (TASA) at University
                of California, Santa Barbara is a student-led social & cultural
                organization on campus that celebrates and explores everything
                Taiwanese American. We welcome people from all cultural
                backgrounds. Even though we&apos;ve grown and changed much over
                the years, our mission to promote community, friendship, and
                culture amongst the student body has remained the same. We hold
                countless events throughout the school year, such as big &
                little pick up, retreat, night market, and more! We are more
                than just a club -- we strive to be a second home for all our
                members!
              </p>
              <div className="h-12"></div>
              <h2 className="text-4xl">Join Us!</h2>
              <p>
                To learn more about our organization, check out our upcoming
                events in the calendar, browse through our photos gallery, or
                reach out to a staff member! Whether you&apos;re an incoming
                Gaucho, a continuing student, or just someone interested in
                TASA, feel free to visit our{" "}
                <Link
                  href="https://www.instagram.com/tasa.ucsb/"
                  target="_"
                  className="text-[#3a96b8]"
                >
                  Instagram
                </Link>{" "}
                for the latest updates! IG: tasa.ucsb Facebook: tasa.ucsb
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
