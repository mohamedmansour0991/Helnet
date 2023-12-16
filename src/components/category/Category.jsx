import React from "react";
import "./Category.scss";
import { useTranslation } from "react-i18next";
function Category({ category }) {
  console.log(category.title);
  const [t] = useTranslation();
  console.log(category);
  return (
    <div className="d-flex category flex-column my-2">
      <p className="my-1">{category?.title}</p>
      <p className="my-1">
        {" "}
        {t("Description")} : {category?.desc}
      </p>
      <p className="my-1">
        {" "}
        {t("Price")} : {category?.price}
      </p>
      <p className="my-1">
        {" "}
        {t("Communication Methods")} : {category?.contact}
      </p>
    </div>
  );
}

export default Category;
