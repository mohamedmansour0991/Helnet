import React, { useState } from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";

function Art() {
  const [t, i18n] = useTranslation();
  const [formValues, setFormValues] = useState({});
  const inputsSelect = [
    {
      name: t("Color"),
      type: "select",
      select: ["red", "blue"],
      state: "color",
    },
  ];
  const handleButtonClick = () => {
    console.log(formValues);
  };
  return (
    <div>
      <FormSelect inputs={inputsSelect} setFormValues={setFormValues} />
      <Button name={t("Save modifications")} onClick={handleButtonClick} />
    </div>
  );
}

export default Art;
