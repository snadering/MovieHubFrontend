const PaginationButtons = ({ pageNumber, totalPages, handlePageChange }) => {
    return (
      <>
        {/* Pagination Buttons */}
        <div className="flex justify-center gap-5 items-center mb-8">
          <button
            onClick={() => handlePageChange("prev")}
            className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-1/4 sm:w-[100px]"
            disabled={pageNumber === 1}
          >
            Prev
          </button>
  
          <span className="text-xl font-bold">Page {pageNumber}</span>
  
          <button
            onClick={() => handlePageChange("next")}
            className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-1/4 sm:w-[100px]"
            disabled={pageNumber === totalPages}
          >
            Next
          </button>
        </div>
      </>
    );
  };
  
  export default PaginationButtons;
  