import { useEffect, useState } from "react";
import { getAssignments } from "../Api";
import { Assignment } from "../models/Assignment";
import AssignmentRow from "../AssignmentRow";

const AssignmentListPage = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    const token = getAssignments();
    token.then((a) => {
      setAssignments(a);
    });
  }, []);
  return (
    <div>
      {assignments.map((a) => (
        <AssignmentRow assignment={a}></AssignmentRow>
      ))}
    </div>
  );
};

export default AssignmentListPage;
