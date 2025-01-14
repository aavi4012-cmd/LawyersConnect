import React from "react";
import "./Solutions.css";

const Solutions = () => {
  const solutions = [
    { title: "Marital Issues?", imgSrc: "marital-issues.png" },
    { title: "Child Custody", imgSrc: "child-custody.png" },
    { title: "Buying Property", imgSrc: "buying-property.png" },
    { title: "Online Scam", imgSrc: "online-scam.png" },
  ];

  return (
    <section className="solutions">
      <h2>Solutions Made Easy</h2>
      <p>One Stop Solution For All Of Your Legal Problems Anytime Anywhere</p>
      <div className="solutions-cards">
        {solutions.map((solution, index) => (
          <div className="card" key={index}>
            <img src={solution.imgSrc} alt={solution.title} />
            <h3>{solution.title}</h3>
            <button className="btn consult-now">Consult Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
