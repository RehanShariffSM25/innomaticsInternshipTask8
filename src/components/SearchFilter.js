import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const SearchFilter = () => {
    const { setSearchQuery, setFilterClass } = useContext(StudentContext);

    return (
        <div className="search-filter">
            <input
                type="text"
                placeholder="Search by name..."
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select onChange={(e) => setFilterClass(e.target.value)}>
                <option value="">All Classes</option>
                <option value="10th Grade">10th Grade</option>
                <option value="11th Grade">11th Grade</option>
                <option value="12th Grade">12th Grade</option>
            </select>
        </div>
    );
};

export default SearchFilter;
