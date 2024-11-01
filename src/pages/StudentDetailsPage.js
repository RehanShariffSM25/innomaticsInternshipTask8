import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useParams } from 'react-router-dom';

const StudentDetailsPage = () => {
    const { students } = useContext(StudentContext);
    const { id } = useParams();
    const student = students.find(student => student.id === parseInt(id));

    if (!student) {
        return <p>Student not found</p>;
    }

    return (
        <div className="student-details">
            <h2>Student Details</h2>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Class:</strong> {student.class}</p>
            <p><strong>Address:</strong> {student.address}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
        </div>
    );
};

export default StudentDetailsPage;
