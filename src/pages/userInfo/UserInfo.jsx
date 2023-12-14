import React from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";

function UserInfo() {
  const [t] = useTranslation();

  const inputsSelect = [
    { name: t("Where are you from?"), type: "select" },
    { name: t("where do you study?"), type: "select" },
    { name: t("Where do you work?"), type: "text" },
    { name: t("When were you born?"), type: "date" },
  ];
  return (
    <div>
      <FormSelect inputs={inputsSelect} name={t("Save modifications")} />
    </div>
  );
}

export default UserInfo;
