import React from 'react';
import { toast } from "react-toastify";
import {
    Card, CardBody, CardTitle, CardText, Button, Container
} from 'reactstrap';
import axios from 'axios';

const courseStyles = {
    card: {
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        marginBottom: "20px",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        border: "2px solid #ddd",
    },
    cardHover: {
        transform: "scale(1.02)",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
    },
    cardBody: {
        padding: "20px",
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#333",
    },
    description: {
        fontSize: "1.2rem",
        color: "#555",
        marginBottom: "15px",
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "center",
    },
    deleteButton: {
        backgroundColor: "#ff6b6b",
        color: "#fff",
        marginRight: "10px",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        transition: "background-color 0.3s ease-in-out",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
    deleteButtonHover: {
        backgroundColor: "#ff4141",
    },
    updateButton: {
        backgroundColor: "#ffc107",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        transition: "background-color 0.3s ease-in-out",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
    updateButtonHover: {
        backgroundColor: "#ff9800",
    },
};

const Course = ({ course, update }) => {

    const delFn = (id) => {
        axios.delete(`http://localhost:8080/courses/${id}`).then(
            (response) => {
                update(id);
                toast.success('🦄 Deleted!', {
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
                toast.error('🦄 Error!', {
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
        <Card
            className='text-center'
            style={{
                ...courseStyles.card,
                ...(courseStyles.cardHover && courseStyles.cardHover),
            }}
        >
            <CardBody style={courseStyles.cardBody}>
                <CardTitle style={courseStyles.title}>{course.title}</CardTitle>
                <CardText style={courseStyles.description}>{course.description}</CardText>
                <Container style={courseStyles.buttonGroup}>
                    <Button
                        color='danger'
                        onClick={() => {
                            delFn(course.id);
                        }}
                        style={{
                            ...courseStyles.deleteButton,
                            ...(courseStyles.deleteButtonHover && courseStyles.deleteButtonHover),
                        }}
                    >
                        Delete
                    </Button>
                    <Button
                        color='warning'
                        style={{
                            ...courseStyles.updateButton,
                            ...(courseStyles.updateButtonHover && courseStyles.updateButtonHover),
                        }}
                    >
                        Update
                    </Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;
