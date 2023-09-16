import React, { useEffect } from "react";
import { Button, Card, CardBody, Container } from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// Define CSS styles for the components
const cardStyle = {
  backgroundColor: "#0072ff",
  color: "white",
  padding: "60px 0",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  marginTop: "20px",
  display: "flex", // Use flexbox to center align items
  flexDirection: "column", // Vertically align items
  alignItems: "center", 
};

const containerStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  marginTop: "20px",
  display: "flex", // Use flexbox to center align items
  flexDirection: "column", // Vertically align items
  alignItems: "center", // Center items horizontally
};

const headingStyle = {
  fontSize: "2.5em",
  marginBottom: "20px",
};

const subHeadingStyle = {
  fontSize: "1.2em",
  color: "#511",
  marginBottom: "30px",
};

const buttonStyle = {
  fontSize: "1.2em",
};

const Home = () => {

    const history = useNavigate(); // Initialize useHistory

    const handleExploreCourses = () => {
      // Navigate to the '/view-courses' route
      history("/view-courses");
    };


  useEffect(() => {
    document.title = "Home || Courses Application";
    toast('🦄 Welcome!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      });
  }, []);

  return (
    <div>
      
      <Card style={cardStyle}>
        
        <CardBody className="text-center">
          <h1 style={headingStyle}>Start Your Learning Journey With Us</h1>
          <p style={subHeadingStyle}>
            Discover a world of knowledge and enhance your skills with our wide range of courses.
          </p>
        </CardBody>
      </Card>

      <Container style={containerStyle}>
        
        <h2>Why Choose Us?</h2>
        <p>
          We are dedicated to providing high-quality online courses in various fields.
          Whether you're a beginner or an expert, our courses are designed to help you
          achieve your learning goals.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to make learning accessible to everyone, anywhere. We believe
          that education has the power to transform lives, and we're here to empower
          you on your learning journey.
        </p>

        <Button color="primary" style={buttonStyle}  onClick={handleExploreCourses}>  
          Explore Courses
        </Button>
      </Container>
    </div>
  );
}

export default Home;
