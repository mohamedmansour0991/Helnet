import React from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";

function Privacy() {
  const [t] = useTranslation();

  const inputsSelect = [
    {
      name: t("Account Privacy"),
      type: "select",
      select: ["Public", "Private"],
    },
    { name: t("Who can see Your Posts"), type: "select" },
    { name: t("Who can see my personal information?"), type: "select" },
  ];
  return (
    <div>
      <FormSelect inputs={inputsSelect} name={t("Save modifications")} />
      {/* <FormSelect inputs={typeUser} name="تغيير" /> */}
    </div>
  );
}

export default Privacy;
