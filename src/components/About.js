import React, { useEffect } from "react";
import { toast } from "react-toastify";
const aboutStyles = {
  container: {
    backgroundColor: "#f0f0f0",
    borderRadius: "15px",
    padding: "20px",
    margin: "20px auto",
    width: "100%",
    maxWidth: "600px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#007bff", // Blue text color
    textTransform: "uppercase",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  },
  paragraph: {
    fontSize: "1.2rem",
    color: "#333", // Dark gray text color
    marginBottom: "20px",
  },
};

const About = () => {

  return (
    <div style={aboutStyles.container}>
      <h1 style={aboutStyles.heading}>About Our Courses Application</h1>
      <p style={aboutStyles.paragraph}>
        Welcome to our Courses Application! We are passionate about providing high-quality online courses in a wide range of subjects. Whether you're a beginner looking to acquire new skills or an expert seeking to expand your knowledge, our platform is designed to meet your educational needs.
      </p>
      <p style={aboutStyles.paragraph}>
        Our mission is to make learning accessible and enjoyable for everyone, regardless of their location or background. We believe that education is a powerful tool for personal and professional growth, and we are committed to helping you achieve your learning goals.
      </p>
      <p style={aboutStyles.paragraph}>
        Join us on your learning journey and explore our diverse catalog of courses. Unlock new opportunities and enhance your skills with Courses Application.
      </p>
    </div>
  );
};

export default About;
