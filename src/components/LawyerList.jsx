import React from "react";
import "./LawyerList.css";

const LawyerList = () => {
  const lawyers = [
    {
      name: "Anirban Das",
      location: "Kolkata, West Bengal, India",
      rating: 4.5,
      reviews: 223,
      expertise: ["Divorce case", "Criminal Lawyer", "Corporate Lawyer"],
      price: 99,
      successRate: "98%",
    },
    {
      name: "Rohit Sharma",
      location: "Delhi, India",
      rating: 4.8,
      reviews: 198,
      expertise: ["Criminal Lawyer", "Civil Cases", "Corporate Lawyer"],
      price: 99,
      successRate: "95%",
    },
    // Add more lawyers here
  ];

  return (
    <section className="lawyer-list">
      <h2>Our Top Lawyers</h2>
      <p>Urgently seeking legal guidance? Connect with our available lawyers now for immediate consultation and reliable advice!</p>
      <div className="lawyer-cards">
        {lawyers.map((lawyer, index) => (
          <div className="card" key={index}>
            <h3>{lawyer.name}</h3>
            <p>{lawyer.location}</p>
            <p>⭐ {lawyer.rating} ({lawyer.reviews} reviews)</p>
            <ul>
              {lawyer.expertise.map((expert, i) => (
                <li key={i}>{expert}</li>
              ))}
            </ul>
            <p>Video consultation @ ₹{lawyer.price}/min</p>
            <p>Success Rate: {lawyer.successRate}</p>
            <button className="btn consult-now">Consult Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LawyerList;
