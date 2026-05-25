"use client";

import { useState } from "react";


export default function PricingSection() {
  const tabs = ["O Level", "AS Level", "A2 Level", "MDCAT"];

  const [activeTab, setActiveTab] = useState("O Level");
  const [activeView, setActiveView] = useState("cards");

  const pricingData = {
    "O Level": [
      {
        title: "Basic Learning Pack",
        access: "Basic Access",
        material: ["Chapter-wise Notes"],
        price: "Rs.999/",
        custom: false,
        buttonText: "Subscribe Now",
      },
      {
        title: "Comprehensive Learning Pack",
        access: "Moderate Access",
        material: [
          "Solved Past Papers Videos",
          "Solved MCQs Videos",
          "Chapter-wise Notes",
        ],
        price: "Rs.999/",
        custom: false,
        buttonText: "Subscribe Now",
      },
      {
        title: "Mastermind Plan",
        access: "Premium Access",
        material: [
          "Chapter-wise Video Lectures",
          "Solved Past Papers Videos",
          "Solved MCQs Videos",
          "Yearly Solved past papers",
        ],
        price: "Rs.999/",
        custom: false,
        buttonText: "Subscribe Now",
      },
      {
        title: "Custom Plan",
        access: "Premium Access",
        material: ["As Per Your Choice"],
        price: "",
        custom: true,
        buttonText: "Contact Us",
      },
    ],

    "AS Level": [
      {
        title: "Basic Learning Pack",
        access: "Basic Access",
        material: ["Chapter-wise Notes"],
        price: "Rs.999/",
        custom: false,
        buttonText: "Subscribe Now",
      },
      {
        title: "Comprehensive Learning Pack",
        access: "Moderate Access",
        material: [
          "Solved Past Papers Videos",
          "Solved MCQs Videos",
          "Chapter-wise Notes",
        ],
        price: "Rs.999/",
        custom: false,
        buttonText: "Subscribe Now",
      },
      {
        title: "Mastermind Plan",
        access: "Premium Access",
        material: [
          "Chapter-wise Video Lectures",
          "Solved Past Papers Videos",
          "Solved MCQs Videos",
          "Chapter-wise Notes",
        ],
        price: "Rs.999/",
        custom: false,
        buttonText: "Subscribe Now",
      },
      {
        title: "Custom Plan",
        access: "Premium Access",
        material: ["As Per Your Choice"],
        price: "",
        custom: true,
        buttonText: "Contact Us",
      },
    ],

    "A2 Level": [
      {
        title: "Basic Learning Pack",
        access: "Basic Access",
        material: ["Chapter-wise Notes"],
        price: "Rs.999/",
        custom: false,
        buttonText: "Subscribe Now",
      },
      {
        title: "Comprehensive Learning Pack",
        access: "Moderate Access",
        material: [
          "Solved Past Papers Videos",
          "Solved MCQs Videos",
          "Chapter-wise Notes",
        ],
        price: "Rs.999/",
        custom: false,
        buttonText: "Subscribe Now",
      },
      {
        title: "Mastermind Plan",
        access: "Premium Access",
        material: [
          "Chapter-wise Video Lectures",
          "Solved Past Papers Videos",
          "Solved MCQs Videos",
          "Chapter-wise Notes",
        ],
        price: "Rs.999/",
        custom: false,
        buttonText: "Subscribe Now",
      },
      {
        title: "Custom Plan",
        access: "Premium Access",
        material: ["As Per Your Choice"],
        price: "",
        custom: true,
        buttonText: "Contact Us",
      },
    ],

    MDCAT: [
      {
        title: "MDCAT Ultimate PrepSuite",
        access: "Premium Access",
        material: [
          "Chapter-wise Video Lectures",
          "Solved Past Papers Videos",
          "Solved MCQs Videos",
          "Chapter-wise Notes",
        ],
        price: "Rs.4999/",
        custom: false,
        buttonText: "Subscribe Now",
      },
    ],
  };

  const comparisonRows = [
    {
      basic: true,
      comprehensive: true,
      mastermind: false,
      custom: false,
      text: "Chapter-wise Notes",
    },
    {
      basic: false,
      comprehensive: false,
      mastermind: true,
      custom: false,
      text: "Chapter-wise Video Lectures",
    },
    {
      basic: false,
      comprehensive: true,
      mastermind: true,
      custom: false,
      text: "Solved Past Papers Videos",
    },
    {
      basic: false,
      comprehensive: true,
      mastermind: true,
      custom: false,
      text: "Solved MCQs Videos",
    },
    {
      basic: false,
      comprehensive: false,
      mastermind: true,
      custom: false,
      text: "Yearly Solved past papers",
    },
  ];

  const plans = pricingData[activeTab];

  const FeatureIcon = ({ active }) => (
    <span className={active ? "pricing-check active" : "pricing-check"}>
      {active ? "✓" : "×"}
    </span>
  );

  return (
    <section className="pricing-section">
      <div className="heading-section course-heading-custom text-center">
        <h5 className="wow fadeInUp" data-wow-delay="0s">
          Price Table
        </h5>

        <h2 className="wow fadeInUp" data-wow-delay="0.1s">
          Let’s get started
        </h2>
      </div>

      <div className="pricing-bg">
        <div className="pricing-container">
          <div className="pricing-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setActiveView("cards");
                }}
                className={activeTab === tab ? "active" : ""}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="pricing-view-dots">
            <button
              type="button"
              aria-label="Show pricing cards"
              onClick={() => setActiveView("cards")}
              className={activeView === "cards" ? "active" : ""}
            />

            <button
              type="button"
              aria-label="Show comparison table"
              onClick={() => setActiveView("table")}
              className={activeView === "table" ? "active" : ""}
            />
          </div>

          {activeView === "cards" && (
            <div
              className={
                activeTab === "MDCAT"
                  ? "pricing-cards pricing-cards-single"
                  : "pricing-cards"
              }
            >
              {plans.map((plan, index) => (
                <div className="pricing-card" key={index}>
                  <div className="pricing-card-top">
                    <h3>{plan.title}</h3>

                    {plan.access && (
                      <p className="pricing-access">
                        <strong>Access:</strong> {plan.access}
                      </p>
                    )}

                    <p className="pricing-material-title">Study Material:</p>

                    <ul>
                        {plan.material.map((item, i) => (
                        <li key={i}>
                            <span className="pricing-file-icon">
                            {item.includes("Yearly") ? "✓" : "📄"}
                            </span>

                            <span>{item}</span>
                        </li>
                        ))}
                    </ul>
                  </div>

<div className="pricing-card-bottom">
  {plan.custom ? (
    <div className="pricing-price-box custom">
      <span>Custom Package</span>
      <h4>Make Your Own Plan</h4>
    </div>
  ) : (
    <div className="pricing-price-box">
      <span>Starting From</span>
      <h4>{plan.price}</h4>
      <p>Per Month</p>
    </div>
  )}

  <button type="button" className="pricing-subscribe-btn">
    {plan.buttonText}
  </button>
</div>
                </div>
              ))}
            </div>
          )}

          {activeView === "table" && (
            <div className="pricing-table-wrap">
              <div className="pricing-table">
                <div className="pricing-table-head">
                  {[
                    "Basic Learning Pack",
                    "Comprehensive Learning Pack",
                    "Mastermind Plan",
                    "Custom Plan",
                  ].map((heading, index) => (
                    <div key={index}>{heading}</div>
                  ))}
                </div>

                {comparisonRows.map((row, index) => (
                  <div className="pricing-table-row" key={index}>
                    <div>
                      <FeatureIcon active={row.basic} />
                      <span>{row.text}</span>
                    </div>

                    <div>
                      <FeatureIcon active={row.comprehensive} />
                      <span>{row.text}</span>
                    </div>

                    <div>
                      <FeatureIcon active={row.mastermind} />
                      <span>{row.text}</span>
                    </div>

                    <div>
                      <FeatureIcon active={row.custom} />
                      <span>{row.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}