import React, { useContext } from "react";
import TaskContext from "../../store/task-context";
import Table from "./Table";

const TableResult = () => {
  const taskCtx = useContext(TaskContext);
  const taskList = taskCtx?.task?.map((task, index) => {
    return <Table task={task} key={index} />;
  });

  console.log(taskCtx);

  return (
    <table className="table-auto bg-[#f6f6f6] mt-5 laptop:w-[976px] rounded tablet:w-[346px]">
      <thead>
        <tr>
          <th>Description</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Duration</th>
        </tr>
      </thead>
      {taskList.length > 0 ? taskList : "No tasks"}
    </table>
  );
};

export default TableResult;
