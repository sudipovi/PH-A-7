import React from "react";
import { useState } from "react";
import Pending from "./Pending";

const TaskStatus = ({ selectedIssue }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  return (
    <div>
      <div onClick={() => setToggleStatus("pending")}>
        <h1 className="font-bold text-2xl mb-3">Task Status</h1>
        <Pending />
      </div>
      <div onClick={() => setToggleStatus("resolved")}>
        <h1 className="font-bold text-2xl">Resolved Task</h1>
      </div>
    </div>
  );
};

export default TaskStatus;
