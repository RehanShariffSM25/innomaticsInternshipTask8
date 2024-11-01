import React, { useContext, useParams } from 'react';
import StudentForm from '../components/StudentForm';
import { StudentContext } from '../context/StudentContext';
import { useNavigate, useLocation } from 'react-router-dom';

const StudentFormPage = () => {
    const { addStudent, updateStudent, students } = useContext(StudentContext);
    const navigate = useNavigate();
    const location = useLocation();
    const studentId = location.state?.id;
    const student = students.find((student) => student.id === studentId);

    const handleFormSubmit = (data) => {
        if (student) {
            updateStudent({ ...data, id: student.id });
        } else {
            addStudent({ ...data, id: Date.now() });
        }
        navigate('/students');
    };

    return (
        <div className="student-form-page">
            <h2>{student ? 'Edit Student' : 'Register Student'}</h2>
            <StudentForm student={student} onSubmit={handleFormSubmit} />
        </div>
    );
};

export default StudentFormPage;
