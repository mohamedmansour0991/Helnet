import React from "react";
import BoxStore from "../../../components/boxStore/BoxStore";
import { news } from "/src/assets/images/icons";
import { useTranslation } from "react-i18next";
import Posts from "../../../components/posts/Posts";
import { easytouse, personal } from "../../../assets/images/icons";

function ProductDisplay() {
  const [t] = useTranslation();

  const buttons = [
    {
      name: t("Show the new product"),
      icon: news,
      inputs: [
        {
          name: t("Product Name"),
          type: "text",
          state: "pName",
        },
        {
          name: t("Product Type"),
          type: "text",
          state: "sType",
        },
        {
          name: t("Price"),
          type: "text",
          state: "sName",
        },
        { name: t("Quantity"), type: "text", state: "Details" },
        { name: t("Product condition"), type: "text", state: "sPrice" },
        {
          name: t("Communication method"),
          type: "text",
          state: "aaboutMe",
        },
      ],
    },
    {
      name: t("View a used product"),
      icon: easytouse,
      inputs: [
        {
          name: t("Product Name"),
          type: "text",
          state: "pName",
        },
        {
          name: t("Product Type"),
          type: "text",
          state: "sType",
        },
        {
          name: t("Price"),
          type: "text",
          state: "sName",
        },
        { name: t("Quantity"), type: "text", state: "Details" },
        { name: t("Product condition"), type: "text", state: "sPrice" },
        {
          name: t("Communication method"),
          type: "text",
          state: "aaboutMe",
        },
      ],
    },
    {
      name: t("Service Request"),
      icon: personal,
      inputs: [
        {
          name: t("Service name"),
          type: "text",
          state: "sName",
        },
        { name: t("Details"), type: "textarea", state: "Details" },
        { name: t("Suggested price"), type: "text", state: "sPrice" },
        {
          name: t("Communication method"),
          type: "text",
          state: "aaboutMe",
        },
      ],
    },
  ];
  return (
    <div className="d-flex flex-column gap-4">
      <BoxStore buttons={buttons} />
      <Posts />
    </div>
  );
}

export default ProductDisplay;
