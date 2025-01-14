import React from "react";
import "./Offerings.css";

function Offerings() {
  const offeringsData = [
    {
      img:"/online.png",// Correct path to the image
    },
    {
      img: "/image1.png", // Correct path to the image
    },
    {
      img: "/image2.png", // Correct path to the image
    },
    {
      img: "/image3.png", // Correct path to the image
    },
  ];

  return (
    <section className="offerings">
      <h2>Our Offerings</h2>
      <div className="offerings-grid">
        {offeringsData.map((offering, index) => (
          <div className="offering" key={index}>
            <img src={offering.img} alt={offering.alt} className="offering-img" />
            <p>{offering.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offerings;
