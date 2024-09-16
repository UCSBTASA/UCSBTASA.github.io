import faqData from "@/data/faqData";

const faqPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="px-8 py-8">
        <h2 className="text-3xl text-center font-bold text-gray-900 uppercase">
          Frequently Asked Questions
        </h2>
        {faqData.map((faqs) => (
          <div className="flex flex-col mb-2 lg:px-55 md:px-32 sm:px-8">
            <h2 className="text-black text-xl mt-6 mb-2 font-medium">
              {faqs.question}
            </h2>
            <div className="text-gray-700">{faqs.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default faqPage;
