const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  return (
    <div className="pagination">
      {totalPages > 1 && (
        <>
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <span>
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
            disabled={currentPage === totalPages - 1}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
