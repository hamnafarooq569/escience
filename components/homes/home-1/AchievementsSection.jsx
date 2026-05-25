"use client";

import { useEffect, useRef, useState } from "react";

export default function AchievementsSection() {
  const achievements = [
    {
      number: 2000,
      suffix: "+",
      label: "Total Enrolled",
      progress: 85,
    },
    {
      number: 98,
      suffix: "%",
      label: "Total Pass Out",
      progress: 98,
    },
    {
      number: 3,
      suffix: "",
      label: "Total Affiliations",
      progress: 65,
    },
    {
      number: 20,
      suffix: "+",
      label: "Years Of Experience",
      progress: 80,
    },
  ];

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState(achievements.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const updatedCounts = achievements.map((item) =>
        Math.floor(progress * item.number)
      );

      setCounts(updatedCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts(achievements.map((item) => item.number));
      }
    };

    requestAnimationFrame(animate);
  }, [startCount]);

  return (
    <section className="section-achievements" ref={sectionRef}>
      <div className="heading-section course-heading-custom text-center">
        <h5 className="wow fadeInUp" data-wow-delay="0s">
          Our Achievements
        </h5>

        <h2 className="wow fadeInUp" data-wow-delay="0.1s">
          Results That Speak
        </h2>
      </div>

      <div className="achievements-bg">
        <div className="achievements-container">
          <div className="achievements-grid">
            {achievements.map((item, index) => {
              const radius = 92;
              const circumference = 2 * Math.PI * radius;
              const offset =
                circumference - (item.progress / 100) * circumference;

              return (
                <div className="achievement-item" key={index}>
                  <svg
                    className="achievement-ring"
                    viewBox="0 0 220 220"
                    aria-hidden="true"
                  >
                    <circle
                      className="achievement-ring-bg"
                      cx="110"
                      cy="110"
                      r="92"
                      fill="none"
                      strokeWidth="10"
                    />

                    <circle
                      className="achievement-ring-progress"
                      cx="110"
                      cy="110"
                      r="92"
                      fill="none"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={startCount ? offset : circumference}
                    />
                  </svg>

                  <div className="achievement-content">
                    <h3>
                      {counts[index]}
                      {item.suffix}
                    </h3>
                    <p>{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}