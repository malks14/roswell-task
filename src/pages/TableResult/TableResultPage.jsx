import React from "react";
import TableResult from "../../components/UI/TableResult";

const TableResultPage = () => {
  return (
    <div className='flex justify-center'> 
      <div className="flex flex-col items-start justify-center flex-wrap">
        <h3>Previous Tasks</h3>
        <TableResult />
      </div>
    </div>
  );
};

export default TableResultPage;
