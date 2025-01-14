import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      title: "Transparent Process",
      description: "Clear and open communication, keeping you informed throughout.",
      icon: "transparent-icon.png",
    },
    {
      title: "End-to-End Encryption",
      description: "Your confidential data is always encrypted on our platform.",
      icon: "encryption-icon.png",
    },
    {
      title: "Smart Legal Assistance",
      description: "Seamless and tech-driven user-friendly digital experience.",
      icon: "smart-assistance-icon.png",
    },
    {
      title: "Affordable Solutions",
      description: "High-quality legal services at budget-friendly prices.",
      icon: "affordable-solutions-icon.png",
    },
  ];

  return (
    <section className="features">
      <h2>We Provide Everything</h2>
      <p>Smart Legal Assistance Online</p>
      <div className="feature-cards">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
