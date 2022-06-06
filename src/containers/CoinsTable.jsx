import React from 'react';
import TableHead from '@components/TableHead';
import '@styles/containers/CoinsTable.css';

function CoinsTable({ children }) {
  return (
    <div className="table-container">
      <table className="table-container__table">
        <colgroup>
          <col className="table-col__id" />
          <col className="table-col__coin" />
          <col className="table-col__price" />
          <col className="table-col__medium" />
          <col className="table-col__medium" />
          <col className="table-col__medium" />
          <col className="table-col__large" />
          <col className="table-col__medium" />
          <col className="table-col__medium" />
        </colgroup>
        <TableHead />
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default CoinsTable;
