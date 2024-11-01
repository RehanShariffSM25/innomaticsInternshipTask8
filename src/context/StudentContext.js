// src/context/StudentContext.js
import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            age: 16,
            class: '10th Grade',
            address: '1234 Elm St, Springfield',
            phone: '123-456-7890'
        },
        // Add more initial students if necessary
    ]);

    const addStudent = (newStudent) => setStudents([...students, newStudent]);
    const updateStudent = (updatedStudent) => {
        setStudents(students.map(s => s.id === updatedStudent.id ? updatedStudent : s));
    };
    const deleteStudent = (studentId) => {
        setStudents(students.filter(s => s.id !== studentId));
    };

    return (
        <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
            {children}
        </StudentContext.Provider>
    );
};
