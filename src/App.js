import './App.css';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Header from './components/Header';
import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
            <Menu/>
            </Col>

            <Col md={8}>
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-course' element={<AddCourse />} />
                <Route path='/view-courses' element={<AllCourses />} />
                <Route path='/about' element={<About />} />
            
            </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
