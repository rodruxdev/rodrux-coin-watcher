import React from 'react';
import { Link } from 'react-router-dom';

function TableRow({
  coinId,
  coinRank,
  name,
  ticker,
  image,
  price,
  marketCap,
  percentageChanges,
  ath,
  athPercentage,
}) {
  return (
    <tr className="table-row">
      <td className="table-row--center">
        <span>{coinRank}</span>
      </td>
      <td className="table-row--center">
        <Link className="table-row__coin" to={`/coin/${coinId}`}>
          <div className="image-container">
            <img src={image} alt={`${name} logo`} />
          </div>
          <p>
            <span className="table-row__coin-name">{name}</span>
            <span> {ticker}</span>
          </p>
        </Link>
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
