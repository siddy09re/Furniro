import { useState } from "react";
import SingleDescription from "./SingleDescription";
import SingleAdditionalInfo from "./SingleAdditionalInfo";
import SingleReview from "./SingleReview";

const SingleProductAdditional = () => {

    const [activeTab, setActiveTab] = useState("description");
  return (
    <div className="py-16 flex flex-col items-center border-t-2 border-b-2">

            <div className="flex sm:gap-4  sm:text-xl text-[14px] ">
            {["description", "additionalInfo", "reviews"].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`sm:px-4 px-2 py-2 ${
                    activeTab === tab ? "border-b-2 border-black font-bold" : ""
                    }`}
                >
                    {tab === "description"
                    ? "Description"
                    : tab === "additionalInfo"
                    ? "Additional Info"
                    : "Reviews [5]"}
                </button>
            ))}
            </div>

            {/* Render Content Based on Active Tab */}
      <div className="mt-4 ">
      {activeTab === "description" && <SingleDescription />}
        {activeTab === "additionalInfo" && <SingleAdditionalInfo />}
        {activeTab === "reviews" && <SingleReview />}
      </div>    
    </div>
  )
}   

export default SingleProductAdditional