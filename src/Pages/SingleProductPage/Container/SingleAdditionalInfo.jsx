import { FaHotTubPerson } from "react-icons/fa6";

const SingleAdditionalInfo = () => {
  return (
    <div className="flex flex-col items-center text-center px-5 w-full">
      <div className="max-w-3xl text-gray-500">
        <p className="md:text-[16px] text-[12px]">
          The Kilburn is equipped with a 20-hour battery life, Bluetooth 5.0, and
          a rugged build for ultimate portability.
        </p>
      </div>

      {/* Info Card */}
      <div className="flex gap-4 mt-6 p-4 border rounded-lg shadow-lg bg-white w-full max-w-3xl">
      <FaHotTubPerson className="w-32 h-32 object-cover rounded-lg" />
        <div className="flex flex-col justify-center text-left">
          <h3 className="sm:text-lg text-[16px] font-semibold">Product Highlights</h3>
          <ul className="list-disc pl-4 text-gray-600 sm:text-sm text-[12px]">
            <li>20-hour battery life</li>
            <li>Bluetooth 5.0 connectivity</li>
            <li>Rugged and durable design</li>
            <li>Clear midrange and extended highs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleAdditionalInfo;
