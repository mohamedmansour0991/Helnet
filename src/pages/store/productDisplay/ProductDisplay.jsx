import React from "react";
import BoxStore from "../../../components/boxStore/BoxStore";
import { search, store, events } from "/src/assets/images/icons";
import { useTranslation } from "react-i18next";

function ProductDisplay() {
  const [t] = useTranslation();

  const buttons = [
    {
      name: t("Show the new product"),
      icon: search,
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
    { name: t("View a used product"), icon: store },
    { name: t("Service Request"), icon: events },
  ];
  return (
    <div className="">
      <BoxStore buttons={buttons} />
    </div>
  );
}

export default ProductDisplay;
