"use client";

import Image from "next/image";
import ScrollTransition from "@/components/scroll-transition";
import ImageCollage from "@/components/imageCollage";

const AndrewChengPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center gap-4 p-4">
        <div className="flex justify-center items-center p-4">
          <ScrollTransition>
            <div className=" rounded-xl overflow-hidden">
              {/* Apply rounded class to a wrapping div */}
              <Image
                src={"/staff_photos/andrew.jpg"}
                alt={"Andrew Cheng"}
                width={400}
                height={250}
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="py-4"
              />
            </div>
          </ScrollTransition>
        </div>

        <div className="font-bebas">
          <h1 className="font-sedan text-2xl mt-4 font-bold">Andrew Cheng</h1>
          <h2 className="font-sedan text-xl">
            B.S. in Biopsychology and Pharmacology
          </h2>
          <h2 className="font-zilla mt-4 mb-2  text-xl font-semibold">
            Last Words to TASA:
          </h2>
          <p className="font-zilla text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            finibus ligula, a dignissim eros. Proin sodales ultrices dapibus. In
            hac habitasse platea dictumst. Donec aliquet ornare scelerisque.
            Cras id lacinia nunc. Phasellus blandit enim ac ligula mattis
            viverra. Nunc sollicitudin massa ac aliquet finibus. Vestibulum
            egestas odio a ante euismod, at dictum justo suscipit. Donec eu leo
            id leo commodo tincidunt imperdiet quis lorem. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Maecenas imperdiet diam ut ligula
            sodales, a tristique enim tincidunt. Etiam eros massa, tristique sit
            amet velit condimentum, interdum rhoncus erat. Suspendisse porttitor
            lacus tempus augue convallis condimentum. Mauris imperdiet neque
            eget ex rutrum elementum. Aenean at libero vitae tellus efficitur
            dictum quis sit amet mauris. Curabitur accumsan nisi urna, vel
            facilisis lorem venenatis euismod. Proin molestie, risus quis
            consectetur accumsan, justo massa tristique justo, sed gravida dolor
            purus sit amet nunc. Vivamus a sem neque. Etiam nec sapien ipsum.
            Proin sed dolor ac quam ultricies semper. Nullam sit amet efficitur
            est. Suspendisse potenti. Fusce sed mi orci. Vivamus suscipit
            accumsan diam, ut hendrerit dolor posuere vel. Duis lacinia posuere
            nisi, vitae tempor nunc porttitor eget. Morbi laoreet lectus et
            feugiat pellentesque. Vivamus feugiat arcu orci, sed elementum justo
            semper id.
          </p>
        </div>
      </div>
      <ImageCollage
        photos={[
          { url: "/alumni_2024/IMG_5965 - Ethan Lin.JPG" },
          { url: "/alumni_2024/IMG_2557 - Charliene Lien.jpeg" },
          { url: "/alumni_2024/IMG_2352 - Charliene Lien.jpeg" },
          { url: "/alumni_2024/IMG_2556 - Charliene Lien.jpeg" },
          { url: "/alumni_2024/IMG_0500 - Ethan Lin.JPG" },
          { url: "/alumni_2024/IMG_5378_Original - Charliene Lien.jpeg" },
          {
            url: "/alumni_2024/IMG_2557 - Charliene Lien.jpeg",
          },
          {
            url: "/alumni_2024/IMG_2557 - Charliene Lien.jpeg",
          },
        ]}
      />
    </div>
  );
};
export default AndrewChengPage;
