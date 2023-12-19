import React from "react";
import "./CardStore.scss";
import { Star } from "/src/assets/images/icons";

export default function CardStore({ products }) {
  return (
    <>
      {products.map((p, i) => (
        <div key={i} className="card__store flex flex-col">
          <img src={p.icon} />
          {p.plus && <span className="card__store__plus">{p.plus}</span>}
          <div className="card__store__content">
            <div className="card__store__rate">
              <ul>
                {Array(p.star)
                  .fill(null)
                  .map((s, i) => (
                    <li key={i}>
                      <img src={Star} />
                    </li>
                  ))}
              </ul>
              <span>({p.rate})</span>
            </div>
            <div className="card__store__dec">{p.desc}</div>
            <div className="card__store__price">{p.price}</div>
          </div>
        </div>
      ))}
    </>
  );
}
