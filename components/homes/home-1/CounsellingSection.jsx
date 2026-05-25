"use client";

import { useState } from "react";

export default function CounsellingSection() {
  const [activeTab, setActiveTab] = useState("academic");

  const academicCards = [
    {
      image:
        "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80",
      title: "Town Hall Session",
      desc: "Interactive group discussions led by experts to enhance collaborative learning and peer engagement.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      title: "Group Learning Session",
      desc: "Students learn through guided activities, class discussions, and structured academic support.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      title: "Online Support Session",
      desc: "Flexible academic support to help students understand concepts and improve learning outcomes.",
    },
  ];

  const collegeCards = [
    {
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      title: "One On One Session",
      desc: "Personalized support with a dedicated mentor to address your unique questions and learning needs.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      title: "Career Guidance Session",
      desc: "Expert guidance to help students choose suitable academic and career pathways.",
    },
  ];

  const currentCards = activeTab === "college" ? collegeCards : academicCards;

  return (
    <section className="section-counselling">
      <div className="tf-container">
        <div className="counselling-tabs">
          <button
            type="button"
            onClick={() => setActiveTab("academic")}
            className={activeTab === "academic" ? "active" : ""}
          >
            Academic Counselling
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("college")}
            className={activeTab === "college" ? "active" : ""}
          >
            College Counselling
          </button>
        </div>

        <div className="heading-section course-heading-custom text-center counselling-heading">
          <h5 className="wow fadeInUp" data-wow-delay="0s">
            Counselling
          </h5>

          <h2 className="wow fadeInUp" data-wow-delay="0.1s">
            {activeTab === "college"
              ? "College Counselling"
              : "Academic Counselling"}
          </h2>
        </div>

        <div
          className={
            activeTab === "college"
              ? "counselling-grid counselling-grid-two"
              : "counselling-grid"
          }
        >
          {currentCards.map((item, index) => (
            <div className="counselling-card" key={index}>
              <div className="counselling-image hover-img">
                <div className="image-wrap">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>

              <div className="counselling-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}