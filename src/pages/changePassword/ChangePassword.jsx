import React, { useState } from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

function ChangePassword() {
  const [t] = useTranslation();
  const [formValues, setFormValues] = useState({});
    const { token } = useSelector((state) => state.auth);

  const inputsSelect = [
    { name: t("Old Password"), type: "password", state: "old_password" },
    { name: t("New Password"), type: "password", state: "new_password" },
    {
      name: t("Confirm Password"),
      type: "password",
      state: "new_password_confirmation",
    },
  ];

  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const handleButtonClick = async () => {
    
    console.log(formValues);
    try {
      const res = await axios.post(
        `${URL}/api/profile/change-password`,
        formValues,

        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);

      if (res.status == 201) {
        toast.success(res?.data?.msg);
      }
    } catch (err) {
      toast.error(t("A network error occurred"));

      console.log(err);
    }
  };
  return (
    <div className="inputSelect">
      <FormSelect inputs={inputsSelect} setFormValues={setFormValues} />
      <Button name={t("Save modifications")} onClick={handleButtonClick} />
    </div>
  );
}

export default ChangePassword;
