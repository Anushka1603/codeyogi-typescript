import { FC } from "react";
import { Lecture } from "./models/Lecture";
import MDEditor from "@uiw/react-md-editor";

type LectureRowProps = { lecture: Lecture };

const LectureRow: FC<LectureRowProps> = ({ lecture }) => {
  return (
    <div className="p-4 m-5 space-y-2 font-semibold bg-white border-2 border-gray-200 rounded-md shadow-md text-md">
      <h3 className="inline-block"> Lecture# {lecture.id}</h3>
      <span className="inline-block ml-6 text-gray-500">
        <h6 className="text-gray-500"></h6>
      </span>
      <p className="text-sm text-gray-500">
        Duration: {lecture.created_at - lecture.end_at}
      </p>
      <div>
        <MDEditor.Markdown source={lecture.topic}></MDEditor.Markdown>
      </div>
      <h6 className="text-gray-500">
        <a
          className="block text-center text-gray-500 text-md"
          href={lecture.recording_url}
        >
          Watch/Download Recording
        </a>
      </h6>
    </div>
  );
};

export default LectureRow;
