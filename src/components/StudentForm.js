// src/components/StudentForm.js
import React, { useState, useEffect } from 'react';

const StudentForm = ({ initialData, onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [className, setClassName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (initialData) {
            setName(initialData.name);
            setEmail(initialData.email);
            setAge(initialData.age);
            setClassName(initialData.class);
            setAddress(initialData.address);
            setPhone(initialData.phone);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const studentData = {
            name,
            email,
            age,
            class: className,
            address,
            phone,
        };
        onSubmit(studentData);
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setAge('');
        setClassName('');
        setAddress('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '15px' }}>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label>Age:</label>
                <input 
                    type="number" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                    required 
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label>Class:</label>
                <input 
                    type="text" 
                    value={className} 
                    onChange={(e) => setClassName(e.target.value)} 
                    required 
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label>Address:</label>
                <input 
                    type="text" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    required 
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label>Phone:</label>
                <input 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
                />
            </div>
            <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>Submit</button>
        </form>
    );
};

export default StudentForm;
