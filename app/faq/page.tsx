import ScrollTransition from "@/components/scroll-transition";
import faqData from "@/data/faqData";

const faqPage = () => {
    return(
        <div>
            <div className="items-center justify-center min-h-screen">
                <div className="px-4 py-8 text-center bg-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 uppercase">
                    Frequently Asked Questions
                    </h2>
                    {faqData.map((faqs)=>(
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-black text-2xl mt-6 font-semibold">
                                {faqs.question}
                            </h2>
                            <p className="text-md text-[#8888888] mt-3 leading-20">
                                {faqs.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default faqPage;