import React from "react";
import "./BlogSection.css";

const BlogSection = () => {
  const blogs = [
    {
      title: "Understanding Property Laws",
      description: "Learn the basics of property laws and how to protect your rights.",
      imgSrc: "property-laws.png",
    },
    {
      title: "Filing a Divorce Case",
      description: "Step-by-step guide to filing a divorce case in India.",
      imgSrc: "divorce-case.png",
    },
    {
      title: "Avoiding Online Scams",
      description: "Tips to stay safe online and avoid scams.",
      imgSrc: "online-scam.png",
    },
  ];

  return (
    <section className="blog-section">
      <h2>Latest Blogs</h2>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div className="card" key={index}>
            <img src={blog.imgSrc} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button className="btn learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
