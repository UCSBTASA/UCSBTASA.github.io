import faqData from "@/data/faqData";
import { Nanum_Myeongjo } from "next/font/google";

// Assuming Nanum_Myeongjo is imported correctly as shown in the provided code.
const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: "400",
});
export default function FAQ() {
  return (
    <section
      className={`${nanumMyeongjo.className} bg-[#FDE8F1] relative overflow-hidden`}
    >
      <div className="container mx-auto px-16 my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl ">
          {faqData.map((faq, index) => (
            <details key={index} className="mb-4">
              <summary className="cursor-pointer text-xl font-semibold text-gray-800">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
