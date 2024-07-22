import React from "react";

const SkeletonCard = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="block relative h-48 rounded overflow-hidden bg-gray-300 animate-pulse">
        <div className=" flex justify-center items-center h-full">
          <svg
            className="w-10 h-10 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <div className="mt-4 ">
        <div className="h-2 bg-gray-200 rounded-full w-20 mx-auto mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mx-auto mb-4 "></div>
        <div className="h-2.5 bg-gray-200 rounded-full w-48 mx-auto mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full w-10 mx-auto mb-4"></div>
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <>
      <div className="lg:w-full mx-auto marker:rounded-lg h-64 overflow-hidden bg-gray-300 animate-pulse">
        {/* image */}
        <div className=" flex justify-center items-center h-full">
          <svg
            className="w-10 h-10 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      {/* card */}
      <div className="py-10 flex flex-wrap -m-4 ">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </>
  );
};

export default Skeleton;
