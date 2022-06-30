import { useState, useEffect } from "react";
import { getLectures } from "../Api";
import { Lecture } from "../models/Lecture";
import LectureRow from "../LectureRow";

function LectureListPage() {
  const [lectures, setLectures] = useState<Lecture[]>([]);

  useEffect(() => {
    const token = getLectures();
    token.then((d) => {
      setLectures(d);
    });
  }, []);

  return (
    <div>
      {lectures.map((l) => (
        <LectureRow lecture={l}></LectureRow>
      ))}
    </div>
  );
}

export default LectureListPage;
