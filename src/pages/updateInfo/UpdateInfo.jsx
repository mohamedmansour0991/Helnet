import React from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";

function UpdateInfo() {
  const [t] = useTranslation();

  const inputsSelect = [
    { name: t("First name"), type: "text", class: "half" },
    { name: t("Last name"), type: "text", class: "half" },
    { name: t("Email address"), type: "email", class: "" },
    { name: t("About You"), type: "textarea", class: "" },
  ];
  const typeUser = [{ name: t("User Type"), type: "select" }];
  return (
    <div>
      <FormSelect inputs={inputsSelect} name={t("Save modifications")} />
      <FormSelect inputs={typeUser} name={t("Change")} />
    </div>
  );
}

export default UpdateInfo;
