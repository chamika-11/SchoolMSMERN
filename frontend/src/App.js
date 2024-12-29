import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Pages/HomePage';
import StudentDetails from './Components/StudentDetails/StudentDetails';

function App() {
  return (
    <div>

          <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        
                        {/* Add other routes */}
                    </Routes>
                </div>
            </div>
        </Router>

      <HomePage/>
      <StudentDetails/>
    </div>
  );
}

export default App;
