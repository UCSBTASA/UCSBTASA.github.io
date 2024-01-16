import ScrollTransition from "@/components/scroll-transition";
import faqData from "@/data/faqData";

const faqPage = () => {
    return(
        <div>
            <div className="px-4 py-8 bg-gray-100">
                <h2 className="text-3xl text-center font-bold text-gray-900 uppercase">
                    Frequently Asked Questions
                </h2>
                {faqData.map((faqs)=>(
                    <div className="flex flex-col lg:px-55 md:px-32 sm:px-8">
                        <h2 className="text-black text-xl mt-6 mb-2 font-medium">
                            Q: {faqs.question}
                        </h2>
                        <p>
                            A: {faqs.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default faqPage;