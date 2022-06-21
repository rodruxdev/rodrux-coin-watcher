/* eslint-disable react/no-array-index-key */
import React from 'react';
import '@styles/containers/LoadingTable.css';

function LoadingTable() {
  return (
    <div className="loading-table">
      <div className="loading-table__header">
        <div className="loading-table__text" />
        <div className="loading-table__text" />
        <div className="loading-table__text" />
        <div className="loading-table__text" />
      </div>
      {[...Array(19)].map((_, index) => (
        <div className="loading-table__row" key={`loading-table-${index}`}>
          <div className="loading-table__text" />
          <div className="loading-table__text" />
          <div className="loading-table__text" />
          <div className="loading-table__text" />
        </div>
      ))}
    </div>
  );
}

export default LoadingTable;
