import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist every 6 months for routine checkups and cleanings. However, some patients may need more frequent visits depending on their oral health condition."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major dental insurance plans. Our staff will help verify your benefits and maximize your coverage. We also offer flexible payment options for uninsured patients."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit includes a comprehensive oral examination, x-rays if needed, discussion of your dental history, and a personalized treatment plan. We'll also perform a professional cleaning if your oral health permits."
    },
    {
      question: "Do you offer emergency dental services?",
      answer: "Yes, we provide emergency dental care during regular business hours. For after-hours emergencies, please call our emergency line and we'll guide you through the next steps."
    },
    {
      question: "Are dental implants painful?",
      answer: "Modern dental implant procedures are performed with local anesthesia and are typically less painful than tooth extractions. Most patients experience minimal discomfort that can be managed with over-the-counter pain medication."
    },
    {
      question: "How long do cosmetic dental procedures take?",
      answer: "Treatment time varies depending on the procedure. Teeth whitening can be completed in one visit, while full smile makeovers may require several appointments over a few weeks or months."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our dental services
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;