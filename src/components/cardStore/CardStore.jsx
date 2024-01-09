import React from "react";
import "./CardStore.scss";
import { Star } from "/src/assets/images/icons";
import { useNavigate } from "react-router-dom";

export default function CardStore({ products }) {
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  // console.log(products);
  return (
    <>
      <div
        className="card__store flex flex-col"
        onClick={() => navigate(`/singleProduct/${products.id}`)}
      >
        {products?.image[0] && (
          <img
            src={`${URL}/storage/${products?.image[0].image.path}`}
            style={{ height: "150px" }}
          />
        )}
        {products?.plus && (
          <span className="card__store__plus">{products?.plus}</span>
        )}
        <div className="card__store__content">
          <div className="card__store__rate">
            <ul>
              {Array(products?.star)
                .fill(null)
                .map((s, i) => (
                  <li key={i}>
                    <img src={Star} />
                  </li>
                ))}
            </ul>
            <span>({products?.quantity})</span>
          </div>
          <div className="card__store__dec">{products?.name}</div>
          <div className="card__store__dec">{products?.type}</div>
          <div className="card__store__price">{products?.price} $</div>
        </div>
      </div>
    </>
  );
}
