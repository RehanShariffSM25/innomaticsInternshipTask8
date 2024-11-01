import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardPage = () => {
    const { students } = useContext(StudentContext);

    const totalStudents = students.length;
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
            <h2>Dashboard</h2>
            <p>Total Students: {totalStudents}</p>
            <h3>Students per Class</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DashboardPage;
