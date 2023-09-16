import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { toast } from "react-toastify";
import axios from 'axios';

const formStyles = {
  container: {
    backgroundColor: "#f0f0f0",
    borderRadius: "15px",
    padding: "20px",
    margin: "20px auto",
    width: "80%",
    maxWidth: "600px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  },
  label: {
    fontSize: "1.2rem",
    color: "#555",
  },
  input: {
    fontSize: "1rem",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "border-color 0.3s, box-shadow 0.3s",
  },
  textarea: {
    fontSize: "1rem",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    minHeight: "100px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "border-color 0.3s, box-shadow 0.3s",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  submitButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "5px",
    border: "none",
    fontSize: "1.2rem",
    cursor: "pointer",
    marginRight: "10px",
    transition: "background-color 0.3s ease-in-out",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
  clearButton: {
    backgroundColor: "#ffc107",
    color: "#333",
    padding: "12px 24px",
    borderRadius: "5px",
    border: "none",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
  submitButtonHover: {
    backgroundColor: "#0056b3",
  },
  clearButtonHover: {
    backgroundColor: "#ff9800",
  },
};

const AddCourse = () => {

  useEffect(() => {
    document.title = "Add Course || Courses Application"
  }, []);

  const [course, setCourses] = useState({});

  const handleForm = (e) => {
    postData(course);

    e.preventDefault();
  }

  const postData = (data) => {
    axios.post('http://localhost:8080/courses', data).then(
      (response) => {
        toast.success('🦄 Course Added Successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      },
      (error) => {
        toast.error('🦄 Error! Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }
    )
  }

  return (
    <Container style={formStyles.container}>
      <h1 style={formStyles.heading} className="text-center my-3">Add a New Course</h1>
      <Form onSubmit={handleForm} className="text-center">
        <FormGroup>
          <Label style={formStyles.label} for="userId">Course ID</Label>
          <Input
            style={formStyles.input}
            type="text"
            placeholder="Enter ID"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourses({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label style={formStyles.label} for="title">Course Title</Label>
          <Input
            style={formStyles.input}
            type="text"
            placeholder="Enter Title"
            id="title"
            onChange={(e) => {
              setCourses({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label style={formStyles.label} for="desc">Course Description</Label>
          <Input
            style={formStyles.textarea}
            type="textarea"
            placeholder="Enter Description"
            id="description"
            onChange={(e) => {
              setCourses({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <Container style={formStyles.buttonGroup}>
          <Button
            style={formStyles.submitButton}
            type="submit"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = formStyles.submitButtonHover.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = formStyles.submitButton.backgroundColor;
            }}
          >
            Add Course
          </Button>
          <Button
            style={formStyles.clearButton}
            type="reset"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = formStyles.clearButtonHover.backgroundColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = formStyles.clearButton.backgroundColor;
            }}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Container>
  )
}

export default AddCourse;
