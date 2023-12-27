import React, { useState } from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Support() {
  const [t, i18n] = useTranslation();
  const [formValues, setFormValues] = useState({});
  const inputsSelect = [
    {
      name: "اكتب رسالتك ثم ارسلها للدعم الفني",
      type: "textarea",
      state: "message",
    },
  ];
    const { token } = useSelector((state) => state.auth);

  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const handleButtonClick = async () => {
    
    //  if (!formValues?.first_name) {
    //    formValues.fName = user?.fName;
    //  }
    console.log(formValues);
    try {
      const res = await axios.post(
        `${URL}/api/profile/support-mai`,
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
      <Button name={t("Send")} onClick={handleButtonClick} />
    </div>
  );
}

export default Support;
