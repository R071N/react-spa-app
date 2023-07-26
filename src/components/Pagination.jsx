import React from 'react';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange
}) {

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }

  return (
    <div className='pagination'>
      <div className='pagination__prev-page' onClick={prevPage}>Назад</div>
      <div className='pagination__numbers'>
        {pageNumbers.map(number => (
          <div
            key={number}
            className={currentPage === number ? 'active' : ''}
            onClick={() => onPageChange(number)}
          >
            {number}
          </div>
        ))}
      </div>
      <div className='pagination__next-page' onClick={nextPage}>Далее</div>
    </div>
  );

}
