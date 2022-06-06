import React from 'react';

function TableRow({
  coinId,
  name,
  ticker,
  // images,
  price,
  marketCap,
  percentageChanges,
  ath,
  athPercentage,
}) {
  return (
    <tr className="table-row">
      <td className="table-row--center">
        <span>{coinId}</span>
      </td>
      <td className="table-row--center">
        <a className="table-row__coin" href="/">
          <div className="image-container">
            <img src="/" alt="" />
          </div>
          <p>
            <span className="table-row__coin-name">{name}</span>
            <span> {ticker}</span>
          </p>
        </a>
      </td>
      <td className="table-row--right">
        <span>${price}</span>
      </td>
      <td className="table-row--right">
        <span>{percentageChanges[0]}%</span>
      </td>
      <td className="table-row--right">
        <span>{percentageChanges[1]}%</span>
      </td>
      <td className="table-row--right">
        <span>{percentageChanges[2]}%</span>
      </td>
      <td className="table-row--right">
        <span>${marketCap}</span>
      </td>
      <td className="table-row--right">
        <span>${ath}</span>
      </td>
      <td className="table-row--right table-row__last">
        <span>{athPercentage}%</span>
      </td>
    </tr>
  );
}

export default TableRow;
