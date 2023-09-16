import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";
import { toast } from "react-toastify";
const allCoursesStyles = {
  container: {
    textAlign: "center",
    background: "linear-gradient(to bottom, #f2f2f2, #d6d6d6)",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
    border: "1px solid #ccc",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#330000",
    textTransform: "uppercase",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  courseList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  courseItem: {
    margin: "10px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    width: "70%",
  },
  courseItemHover: {
    transform: "scale(1.02)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  noCoursesMessage: {
    fontSize: "1.2rem",
    color: "#555",
    marginTop: "30px",
  },
};

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "All Courses || Course Application";
    getAllCoursesFromDB();
    
  },[]);

  const getAllCoursesFromDB = () => {
    axios
      .get("http://localhost:8080/courses")
      .then((response) => {
        setCourses(response.data);
        toast.success('🦄 Loaded all the courses!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
          });
      })
      .catch((error) => {
        console.log("er");
        toast.error('🦄 Server error!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
          });
      });
  };

  const delCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div style={allCoursesStyles.container}>
      <h1 style={allCoursesStyles.heading}>All Courses</h1>
      <div style={allCoursesStyles.courseList}>
        {courses.length > 0 ? (
          courses.map((item) => (
            <div
              key={item.id}
              style={{
                ...allCoursesStyles.courseItem,
                ...(courses.length > 0
                  ? allCoursesStyles.courseItemHover
                  : {}),
              }}
            >
              <Course course={item} update={delCourse} />
            </div>
          ))
        ) : (
          <div style={allCoursesStyles.noCoursesMessage}>
            No courses available.
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCourses;
