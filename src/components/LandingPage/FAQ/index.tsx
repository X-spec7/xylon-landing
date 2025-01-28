"use client"

import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Xylon?",
      answer:
        "Xylon is a platform that leverages advanced technologies to redefine sustainability, empowering users to make meaningful contributions toward a greener planet.",
    },
    {
      question: "How does Xylon drive energy efficiency?",
      answer:
        "Our solutions focus on optimizing energy use and encouraging sustainable practices through actionable insights and measurable progress.",
    },
    {
      question: "Who can benefit from Xylon's solutions?",
      answer:
        "Individuals, businesses, and communities seeking scalable and impactful tools for sustainability can benefit from Xylon's offerings.",
    },
    {
      question: "What makes Xylon's approach unique?",
      answer:
        "Xylon prioritizes efficiency, scalability, and real-world impact, ensuring that sustainability is accessible and achievable for all.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative z-10 py-20 h-screen  lg:px-20 text-shadow-lg text-white bg-black/30 border-b border-white/40"
    >
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Heading */}
        <h2 className="text-4xl lg:text-4xl font-bold mb-6">FAQs</h2>
        <p className="text-lg max-w-4xl mx-auto mb-12">
          Have questions about Xylon? We’ve got answers.
        </p>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto mt-32 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-white/20 rounded-lg ${
                activeIndex === index ? "bg-black/80" : "bg-black/70"
              }`}
            >
              <button
                className="w-full text-left p-4 text-lg font-medium flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span
                  className={`transform transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-base border-t border-white/20">
                  {faq.answer}
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
