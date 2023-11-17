import React from "react";

export default function InventoryItem({ description: string }) {
  return (
    <article className="row product">
      <div className="col-1 product-name">
        <h4></h4>
      </div>
      <div className="col-2 product-detail">
        <p>{description}</p>
        <p></p>
        <p></p>
      </div>
      <div className="col-3 product-amount">
        <p></p>
      </div>
    </article>
  );
}
