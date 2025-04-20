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
      className={`${nanumMyeongjo.className} bg-[#f4e6e3] relative overflow-hidden flex justify-center`}
    >
      <div className="container mx-auto px-16 my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl text-left mx-auto">
          {faqData.map((faq, index) => (
            <details key={index} className="mb-4 border-b pb-2">
              <summary className="cursor-pointer text-xl font-semibold text-gray-800 flex justify-between items-center">
                {faq.question}
                <span className="ml-2">▼</span> {/* Arrow on the right */}
              </summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
