import React from "react";
import "../style/about.css";
const About = () => {
  const articles = [
    {
      title: "My birtday",
      date: "January 20, 2005",
      categories: "",
      content: "I am currently learning programming...",
    },
    {
      title: "Joined indra Cyber institute",
      date: "September 5, 2032",
      categories: "Studying software",
      content:
        "Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...",
    },
    {
      title: "Increasing productivity through workplace friends",
      date: "October 15, 2023",
      categories: "Design",
      content:
        "Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...",
    },
  ];

  return (
    <div className="blog-post" id="/about">
      <h2 className="tomii" style={{ color: "#49ad7b" }}>
        {"<About><me/>"}
      </h2>
      {articles.map((article, index) => (
        <div key={index} className="article">
          <h3 style={{ color: "#49ad7b" }}>{`<${article.title}/>`}</h3>
          <p style={{ color: "white" }}>{article.date}</p>
          <p style={{ color: "white" }}>{article.categories}</p>
          <p style={{ color: "white" }}>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
