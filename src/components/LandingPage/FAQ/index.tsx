"use client"
import { ISectionProps } from "@/types"
import { languages, fallbackLng } from "@/app/i18n/settings"
import { useTranslation } from "@/app/i18n/client"
import { useState } from "react"

const FAQ: React.FC<ISectionProps> = ({ lng }) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation(lng, "faq")

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: `${t("faq1.question")}`,
      answer:
        `${t("faq1.answer")}`,
    },
    {
      question: `${t("faq2.question")}`,
      answer:
        `${t("faq2.answer")}`,
    },
    {
      question: `${t("faq3.question")}`,
      answer:
        `${t("faq3.answer")}`,
    },
    {
      question: `${t("faq4.question")}`,
      answer:
        `${t("faq4.answer")}`,
    },
  ];

  return (
    <section
      id="faq"
      className="relative z-10 py-20 h-screen  lg:px-20 text-shadow-lg text-white bg-black/30 border-b border-white/40"
    >
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Heading */}
        <h2 className="text-4xl lg:text-4xl font-bold mb-6">{t("faq.title")}</h2>
        <p className="text-lg max-w-4xl mx-auto mb-12">
          {t("faq.description")}
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
