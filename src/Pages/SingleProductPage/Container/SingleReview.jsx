import { IoPersonAdd } from "react-icons/io5";

const SingleReview = () => {
  return (
    <div className="flex flex-col items-center w-full px-5">
      
      <div className="max-w-3xl text-gray-500 text-center">
        <p className="md:text-[16px] text-[12px]">
          Here’s what our customers are saying about the Kilburn Speaker.
        </p>
      </div>

      {/* Review Card */}
      <div className="mt-6 p-4 border rounded-lg shadow-lg bg-white w-full max-w-3xl flex items-center">
        <IoPersonAdd className="min-w-12 min-h-12 object-cover rounded-full" /> 
        <div className="ml-4">
          <h4 className="font-semibold">John Doe</h4>
          <p className="text-gray-600 text-sm">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-600 text-sm mt-2">
            “Absolutely love this speaker! The sound quality is top-notch, and the battery lasts forever.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
