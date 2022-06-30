import { FC } from "react";
import { Assignment } from "./models/Assignment";

type AssignmentRowProps = { assignment: Assignment };

const AssignmentRow: FC<AssignmentRowProps> = ({ assignment }) => {
  return (
    <div className="p-4 m-5 bg-white border-2 border-gray-200 rounded-md shadow-md ">
      <div>
        <div className="space-x-2 font-semibold text-md">
          <span>#{assignment.id} </span>
          <span>{assignment.title}</span>
          <span className="text-gray-500 text-md"></span>
        </div>

        <div className="flex justify-between pt-4">
          <span className="text-red-500">Due Date: </span>
          <span className="text-lg font-semibold text-green-600">{}</span>
        </div>
      </div>
      <div className="flex justify-between pt-6 pb-4 sm:mx-40">
        <button type="button" className="font-semibold text-green-600">
          Re-submit
        </button>

        <a className="font-semibold text-blue-600 underline" href="#">
          Check your submission
        </a>
      </div>
    </div>
  );
};

export default AssignmentRow;
