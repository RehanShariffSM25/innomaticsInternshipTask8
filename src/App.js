import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';
import StudentListPage from './pages/StudentListPage';
import RegisterStudent from './components/RegisterStudent';
import StudentDetails from './components/StudentDetails'; // Import the new component
import './assets/styles.css';
function App() {
    return (
        <StudentProvider>
            <Router>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/students" element={<StudentListPage />} />
                    <Route path="/register" element={<RegisterStudent />} />
                    <Route path="/students/:studentId" element={<StudentDetails />} /> {/* Dynamic route for student details */}
                </Routes>
            </Router>
        </StudentProvider>
    );
}

export default App;
