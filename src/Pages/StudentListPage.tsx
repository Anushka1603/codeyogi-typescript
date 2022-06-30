import { useState, useEffect } from "react";
import { getStudents } from "../Api";
import { User } from "../models/Student";
import StudentsRow from "../StudentRow";

function StudentsListPage() {
  const [students, setStudents] = useState<User[]>([]);
  useEffect(() => {
    const token = getStudents();
    token.then((d) => {
      setStudents(d);
    });
  }, []);
  return (
    <div className="flex flex-wrap mx-10 sm:space-x-4">
      {students.map((s) => (
        <StudentsRow user={s}></StudentsRow>
      ))}
    </div>
  );
}

export default StudentsListPage;
