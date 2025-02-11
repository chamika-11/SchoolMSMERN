import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Pages/HomePage';
import StudentDetails from './Components/StudentDetails/StudentDetails';
import ContactUs from './Components/ContactUs/ContactUs';
import LoginPage from './Components/LoginPage/LoginPage';
import Gallery from './Components/Gallery/Gallery';
import { StrictMode } from 'react';

function App() {
  return (
    <Router>
      <StrictMode>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/academics" element={<StudentDetails />} />
          </Routes>
        </div>
      </div>
      </StrictMode>
    </Router>
  );
}


export default App;
