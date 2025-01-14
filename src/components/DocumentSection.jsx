import React from "react";
import "./DocumentSection.css";

const DocumentSection = () => {
  const documents = [
    {
      title: "Legal Notices & Letters",
      description: "Draft, review, and send legally binding notices.",
      imgSrc: "legal-notices.png",
    },
    {
      title: "Property & Rental Agreements",
      description: "Get property and rental agreements reviewed or drafted.",
      imgSrc: "property-agreements.png",
    },
    {
      title: "Employment & HR Documents",
      description: "Create and review employment-related legal documents.",
      imgSrc: "employment-documents.png",
    },
  ];

  return (
    <section className="document-section">
      <h2>Document Processing</h2>
      <p>Effortless legal document creation and management.</p>
      <div className="document-cards">
        {documents.map((document, index) => (
          <div className="card" key={index}>
            <img src={document.imgSrc} alt={document.title} />
            <h3>{document.title}</h3>
            <p>{document.description}</p>
            <button className="btn view-more">View More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentSection;
