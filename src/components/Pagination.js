import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const Pagination = ({ totalPages }) => {
    const { currentPage, setCurrentPage } = useContext(StudentContext);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                    key={number}
                    onClick={() => handleClick(number)}
                    className={number === currentPage ? 'active' : ''}
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
