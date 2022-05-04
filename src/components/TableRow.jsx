import React from 'react';

function TableRow() {
  return (
    <tr className="table-row">
      <td className="table-row--center">
        <span>1</span>
      </td>
      <td className="table-row--center">
        <a className="table-row__coin" href="/">
          <div className="image-container">
            <img src="/" alt="" />
          </div>
          <span>BTC</span>
        </a>
      </td>
      <td className="table-row--right">
        <span>$0.00002452</span>
      </td>
      <td className="table-row--right">
        <span>1234.5%</span>
      </td>
      <td className="table-row--right">
        <span>-2.5%</span>
      </td>
      <td className="table-row--right">
        <span>1.7%</span>
      </td>
      <td className="table-row--right">
        <span>$772,504,060,812</span>
      </td>
      <td className="table-row--right table-row__last">
        <span>$32,839,886,478 </span>
      </td>
    </tr>
  );
}

export default TableRow;
