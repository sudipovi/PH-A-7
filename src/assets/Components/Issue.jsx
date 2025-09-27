import React from "react";
import { use, useState } from "react";
import IssueCard from "./IssueCard";
import Managment from "./Managment";
import TaskStatus from "./TaskStatus";

const Issue = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);
  const [selectedIssue, setSelectedIssue] = useState("");

  return (
    <div className="container mx-auto my-9">
      <Managment data={data} />

      <div>
        <h1 className="font-bold text-2xl">Customer Tickets</h1>
      </div>

      <div className="md:flex md:justify-items-center gap-9">
        <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-2">
          {data.map((issue) => {
            //console.log(issue);
            return <IssueCard issue={issue}></IssueCard>;
          })}
        </div>
        <TaskStatus
          selectedIssue={selectedIssue}
          setSelectedIssue={setSelectedIssue}
        />
      </div>
    </div>
  );
};

export default Issue;
