import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentList = () => {
    const { students, deleteStudent } = useContext(StudentContext);
    const [currentPage, setCurrentPage] = useState(1);
    const studentsPerPage = 10;

    if (!students) {
        return <div>Loading students...</div>;
    }

    // Pagination Logic
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);
    const totalPages = Math.ceil(students.length / studentsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentStudents.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.class}</td>
                            <td>
                                <button onClick={() => deleteStudent(student.id)}>Delete</button>
                                {/* Add Edit functionality as needed */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={currentPage === i + 1 ? 'active' : ''}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StudentList;
