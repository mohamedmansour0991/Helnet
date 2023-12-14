import React from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";

function ChangePassword() {
  const [t] = useTranslation();

  const inputsSelect = [
    { name: t("Old Password"), type: "password" },
    { name: t("New Password"), type: "password" },
    { name: t("Confirm Password"), type: "password" },
  ];
  return (
    <div>
      <FormSelect inputs={inputsSelect} name="حفظ التعديلات" />
    </div>
  );
}

export default ChangePassword;
