'use client';
import React, { useEffect, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const range = isMobile ? 1 : 2;

    const startPage = Math.max(2, currentPage - range);
    const endPage = Math.min(totalPages - 1, currentPage + range);

    pages.push(1);
    if (startPage > 2) pages.push('…');

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) pages.push('…');
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="w-full mt-6 px-4">
      <div className="flex justify-center items-center space-x-1 sm:space-x-2 flex-nowrap">
        {/* Previous Button (icon-only on mobile) */}
        <button
          onClick={onPrev}
          disabled={currentPage === 1}
          className={`shrink-0 whitespace-nowrap flex items-center gap-1 px-2 sm:px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            currentPage === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-600 text-white hover:bg-gray-700 active:scale-95 shadow-md cursor-pointer'
          }`}
        >
          <HiChevronLeft className="text-lg" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Page Buttons */}
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={typeof page !== 'number'}
            className={`shrink-0 whitespace-nowrap px-3 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
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

        {/* Next Button (icon-only on mobile) */}
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className={`shrink-0 whitespace-nowrap flex items-center gap-1 px-2 sm:px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            currentPage === totalPages
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-600 text-white hover:bg-gray-700 active:scale-95 shadow-md cursor-pointer'
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <HiChevronRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
