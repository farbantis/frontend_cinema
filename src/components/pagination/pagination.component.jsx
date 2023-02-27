import React from 'react';
import './pagination.styles.css'


const Pagination = ({totalPages, currentPage, handlePageChange}) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const pageList = pageNumbers.map(number => {
        if (number === currentPage) {
            return (
                <span key={number} className="my_page__current">
          {number}
        </span>
            );
        }
        if (number === 1 || number === 2 || number === totalPages - 1 || number === totalPages) {
            return (
                <a key={number} onClick={() => handlePageChange(number)} className="my_page__number">
                    {number}
                </a>
            );
        }
        if (
            currentPage - number < 3 &&
            number - currentPage < 3 &&
            number !== 1 &&
            number !== 2 &&
            number !== totalPages - 1 &&
            number !== totalPages
        ) {
            return (
                <a key={number} onClick={() => handlePageChange(number)} className="my_page__number">
                    {number}
                </a>
            );
        }
        return null;
    });

    return (

        <div className="pagination_container">
            <div className="pagination">
                {pageList}
            </div>

        </div>
    );
};

export default Pagination;