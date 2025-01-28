"use client"

import { ISectionProps } from "@/types"
import { languages, fallbackLng } from "@/app/i18n/settings"
import { useTranslation } from "@/app/i18n/client"

const Contact: React.FC<ISectionProps> = ({ lng }) => {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation(lng, "contact")

  return (
    <section
      id="contact"
      className="relative z-10 h-screen flex flex-col justify-center items-center lg:px-20 text-shadow-lg text-white bg-black/50 border-b border-white/40"
    >
      <div className="container mx-auto max-w-4xl text-center">
        {/* Section Heading */}
        <h2 className="text-4xl lg:text-4xl font-bold mb-6">{t("contact.title")}</h2>
        <p className="text-lg mb-10">
          {t("contact.description1")}{" "}
          <a
            href="mailto:info@xylon.dev"
            className="underline hover:text-teal-400"
          >
            info@xylon.dev
          </a>{" "}
          {t("contact.description2")}
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              {t("contact.form.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              {[t("contact.form.email")]}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              {t("contact.form.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-white text-lg font-medium shadow-lg transition duration-200"
          >
            {t("contact.form.button")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
