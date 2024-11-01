import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Dashboard.css'; // Assuming you want to create a specific CSS file for the Dashboard component

const Dashboard = () => {
    const { students } = useContext(StudentContext); // Ensure students is defined

    const totalStudents = students.length;

    // Calculate students per class for the chart
    const studentsPerClass = students.reduce((acc, student) => {
        acc[student.class] = (acc[student.class] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.keys(studentsPerClass).map((className) => ({
        name: className,
        count: studentsPerClass[className],
    }));

    return (
        <div className="dashboard">
            {/* Header Content */}
            <h1>Student Management Portal</h1>
            <h2>Welcome to the Student Management Portal</h2>
            <p>This portal allows you to manage student registrations efficiently.</p>
            <p>Use the navigation above to register new students or view the student list.</p>

            {/* Student Count */}
            <p className="total-students">Total Students: <strong>{totalStudents}</strong></p>

            <h3>Students per Class</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;
