import React from "react";
//icons
import { IoWarningOutline } from "react-icons/io5";

const WarningCard = () => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full text-center">
      <div className=" h-48 rounded overflow-hidden  flex justify-center items-center">
        <IoWarningOutline className="h-40 w-40 text-yellow-500" />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          請慎防工作詐騙
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Letiv 不會以加入FB/LINE
          <br />
          好友方式應徵職缺
        </h2>
      </div>
    </div>
  );
};

export default WarningCard;
