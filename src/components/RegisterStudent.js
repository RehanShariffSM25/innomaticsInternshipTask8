// src/components/RegisterStudent.js
import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';

const RegisterStudent = () => {
    const { addStudent } = useContext(StudentContext); // Destructure addStudent from context
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        class: '', // Keep class as an empty string for the dropdown
        address: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent({ ...formData, id: Date.now() }); // Add a unique ID for new student
        setFormData({ name: '', email: '', age: '', class: '', address: '', phone: '' });
    };

    return (
        <div>
            <h2>Register Student</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Age:</label>
                    <input 
                        type="number" 
                        name="age" 
                        placeholder="Age" 
                        value={formData.age} 
                        onChange={handleChange} 
                        required 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Class:</label>
                    <select 
                        name="class" 
                        value={formData.class} 
                        onChange={handleChange} 
                        required 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    >
                        <option value="" disabled>Select Class</option>
                        {/* Dropdown options for classes 1 to 12 */}
                        {[...Array(12).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                                {num + 1} Grade
                            </option>
                        ))}
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Address:</label>
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="Address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Phone:</label>
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="Phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
                    />
                </div>
                <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>Submit</button>
            </form>
        </div>
    );
};

export default RegisterStudent;
