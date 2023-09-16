import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";


const menuStyles = {
  container: {
    backgroundColor: "#1ad1ff",
    color: "#333",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    perspective: "1000px", // Add perspective to create 3D effect
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    textTransform: "uppercase",
  },
  menuItem: {
    fontSize: "1.4rem",
    marginBottom: "10px",
    textDecoration: "none",
    padding: "10px 20px",
    display: "block",
    borderRadius: "5px",
    backgroundColor: "#ffffff",
    color: "#333",
    transformStyle: "preserve-3d", // Apply 3D transformation
    transform: "translateZ(0)", // Prevent flickering in some browsers
    position: "relative", // Set position to enable stacking
    transition: "all 0.3s ease-in-out", // Add a transition for the transform property
    cursor: "pointer", // Change cursor on hover
  },
};

const Menu = () => {
  const handleMouseEnter = (event) => {
    event.target.style.transform = "rotateY(10deg) translateZ(20px) scale(1.05)";
    event.target.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
  };

  const handleMouseLeave = (event) => {
    event.target.style.transform = "translateZ(0)";
    event.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  };

  return (
    
    <div style={menuStyles.container}>
      
      <h2 style={menuStyles.heading}>Menu</h2>
      
      <ListGroup>
        
        <Link
          className="menu-item"
          to="/"
          style={menuStyles.menuItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Home
        </Link>
        <Link
          className="menu-item"
          to="/add-course"
          style={menuStyles.menuItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Add Course
        </Link>
        <Link
          className="menu-item"
          to="/view-courses"
          style={menuStyles.menuItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          View Courses
        </Link>
        <Link
          className="menu-item"
          to="/about"
          style={menuStyles.menuItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          About Us
        </Link>
        <Link
          className="menu-item"
          to="#!"
          style={menuStyles.menuItem}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Contact Us
        </Link>
      </ListGroup>
      
    </div>
  );
};

export default Menu;
