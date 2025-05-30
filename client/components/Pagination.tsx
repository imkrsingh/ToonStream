'use client';
import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onPrev,
  onNext,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    pages.push(1);

    if (startPage > 2) pages.push('…');
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    if (endPage < totalPages - 1) pages.push('…');

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-8 font-sans select-none">
      {/* Previous Button */}
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          currentPage === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gray-600 text-white hover:bg-gray-700 active:scale-95 shadow-md cursor-pointer'
        }`}
        aria-label="Previous page"
      >
        <HiChevronLeft className="text-lg" />
        <span>Prev</span>
      </button>

      {/* Page Buttons */}
      <div className="flex space-x-1">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={typeof page !== 'number'}
            className={`px-3 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              page === currentPage
                ? 'bg-gray-600 text-white shadow-md cursor-default'
                : typeof page === 'number'
                ? 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-gray-700 hover:shadow-sm active:scale-95 cursor-pointer'
                : 'bg-transparent text-gray-500 cursor-default'
            }`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          currentPage === totalPages
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-gray-600 text-white hover:bg-gray-700 active:scale-95 shadow-md cursor-pointer'
        }`}
        aria-label="Next page"
      >
        <span>Next</span>
        <HiChevronRight className="text-lg" />
      </button>
    </div>
  );
};

export default Pagination;
