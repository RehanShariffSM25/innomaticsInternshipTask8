// src/pages/StudentListPage.js
import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import StudentForm from '../components/StudentForm';

const StudentListPage = () => {
    const { students, updateStudent, deleteStudent } = useContext(StudentContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [sortField, setSortField] = useState('');
    const [editingStudent, setEditingStudent] = useState(null);

    // Filter students based on search term and selected class
    const filteredStudents = students
        .filter(student => 
            student.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(student => 
            selectedClass ? student.class === selectedClass : true
        )
        .sort((a, b) => {
            if (sortField === 'name') {
                return a.name.localeCompare(b.name); // Sort by name
            } else if (sortField === 'class') {
                return a.class.localeCompare(b.class); // Sort by class
            }
            return 0; // No sorting
        });

    const handleEditClick = (student) => {
        setEditingStudent(student);
    };

    const handleDeleteClick = (studentId) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            deleteStudent(studentId);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClassChange = (e) => {
        setSelectedClass(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortField(e.target.value);
    };

    const handleFormSubmit = (updatedStudent) => {
        updateStudent(updatedStudent);
        setEditingStudent(null); // Reset after editing
    };

    // Extract unique classes for filter dropdown
    const classOptions = Array.from(new Set(students.map(student => student.class)));

    return (
        <div>
            <h2>Student List</h2>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ padding: '5px', marginRight: '10px' }}
                />
                <select onChange={handleClassChange} value={selectedClass} style={{ marginRight: '10px' }}>
                    <option value="">All Classes</option>
                    {classOptions.map(classOption => (
                        <option key={classOption} value={classOption}>
                            {classOption}
                        </option>
                    ))}
                </select>
                <select onChange={handleSortChange} value={sortField}>
                    <option value="">Sort By</option>
                    <option value="name">Name</option>
                    <option value="class">Class</option>
                </select>
            </div>
            <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.class}</td>
                            <td>
                                <button onClick={() => handleEditClick(student)}>Edit</button>
                                <button onClick={() => handleDeleteClick(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Form for updating student details */}
            {editingStudent && (
                <div>
                    <h3>Edit Student</h3>
                    <StudentForm initialData={editingStudent} onSubmit={handleFormSubmit} />
                </div>
            )}
        </div>
    );
};

export default StudentListPage;
