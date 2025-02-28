import faqData from "@/data/faqData";

export default function FAQ() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
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
