"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "High-Quality Video Lessons",
      answer:
        "Our lessons are designed to explain concepts clearly with structured academic guidance for O/A Level and MDCAT students.",
    },
    {
      question: "Personalized Feedback and Support",
      answer:
        "Students receive learning support and feedback to improve concepts, practice performance, and exam preparation.",
    },
    {
      question: "Access to Course Materials and Resources",
      answer:
        "Students can access notes, video lessons, solved papers, MCQs, and other useful study resources.",
    },
    {
      question: "Can I access classes online?",
      answer:
        "Yes, students can access online learning support and course materials according to their selected plan.",
    },
    {
      question: "How can I choose the right plan?",
      answer:
        "You can select a plan based on your level, subject needs, and required study material. For custom guidance, contact our team.",
    },
  ];

  return (
    <section className="section-faq-custom">
      <div className="tf-container">
        <div className="heading-section course-heading-custom text-center">
          <h5 className="wow fadeInUp" data-wow-delay="0s">
            FAQs
          </h5>

          <h2 className="wow fadeInUp" data-wow-delay="0.1s">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="faq-custom-wrap">
          <div className="faq-custom-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-custom-item ${
                  openIndex === index ? "active" : ""
                }`}
                key={index}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="faq-custom-question"
                >
                  <span>{faq.question}</span>
                  <i>{openIndex === index ? "−" : "+"}</i>
                </button>

                {openIndex === index && (
                  <div className="faq-custom-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq-custom-image">
            <img src="/Elements-10.png" alt="FAQ Support" />
          </div>
        </div>
      </div>
    </section>
  );
}