import React from 'react';

function TableHead() {
  return (
    <thead className="table-head">
      <tr>
        <th className="table-row--center">#</th>
        <th className="table-row--center">Coin</th>
        <th className="table-row--right">Price</th>
        <th className="table-row--right">1h</th>
        <th className="table-row--right">24h</th>
        <th className="table-row--right">7d</th>
        <th className="table-row--right">Mkt Cap</th>
        <th className="table-row--right">ATH</th>
        <th className="table-row--right table-row__last">ATH Change</th>
      </tr>
    </thead>
  );
}

export default TableHead;
