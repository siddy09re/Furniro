const ShopPagination = ({ currentPage, totalPages, goToPage, handleNext, handlePrev }) => {
    return (
      <div className="flex justify-center mt-4  ">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="sm:px-4 sm:py-1 px-2 py-1 bg-gray-300 text-black rounded-full mx-2 disabled:opacity-50 
          sm:text-[16px] text-[10px]"
        >
          Prev
        </button>
  
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`px-4 py-2  mx-1 rounded-xl  sm:text-[16px] text-[10px] ${
              currentPage === index ? "bg-custom-brown text-white" : "bg-gray-300 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
  
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="sm:px-4 sm:py-2 px-2 py-1 bg-gray-300 text-black rounded-full mx-2 disabled:opacity-50
           sm:text-[16px] text-[10px]"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default ShopPagination;
  