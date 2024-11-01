import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

const StudentItem = ({ student }) => {
    const { deleteStudent } = useContext(StudentContext);

    return (
        <div className="student-item">
            <span>{student.name}</span>
            <span>{student.email}</span>
            <span>{student.class}</span>
            <div className="actions">
                <Link to={`/students/${student.id}`}>View</Link>
                <Link to={`/edit/${student.id}`}>Edit</Link>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
            </div>
        </div>
    );
};

export default StudentItem;
