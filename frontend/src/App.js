import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Pages/HomePage';
import StudentDetails from './Components/StudentDetails/StudentDetails';
import ContactUs from './Components/ContactUs/ContactUs';
import LoginPage from './Components/LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Contact" element={<ContactUs />} />
            <Route path="/student-details" element={<StudentDetails />} />
            <Route path="/LoginPage" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
