import React, { useState } from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { getUser } from "../../rtk/Api/Api";

function UpdateInfo() {
  const [t] = useTranslation();
  const [formValues, setFormValues] = useState({});
  const { token, user } = useSelector((state) => state.auth);

  const inputsSelect = [
    {
      name: t("First name"),
      type: "text",
      class: "half",
      state: "first_name",
      value: `${user?.first_name}`,
    },
    {
      name: t("Last name"),
      type: "text",
      class: "half",
      state: "last_name",
      value: user?.last_name,
    },
    {
      name: t("Email address"),
      type: "email",
      class: "",
      state: "email",
      value: user?.email,
    },
    { name: t("About You"), type: "textarea", class: "", state: "aaboutMe" },
  ];
  const typeUser = [{ name: t("User Type"), type: "select" }];

  const dispatch = useDispatch();

  //upload text
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const handleButtonClick = async () => {
    if (!formValues?.first_name) {
      formValues.first_name = user?.first_name;
    }
    if (!formValues?.last_name) {
      formValues.last_name = user?.last_name;
    }
    if (!formValues?.email) {
      formValues.email = user?.email;
    }
    //  if (!formValues?.first_name) {
    //    formValues.fName = user?.fName;
    //  }
    console.log(formValues);
    try {
      const res = await axios.post(
        `${URL}/api/profile/updateInformation`,
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
        await getUser(token, dispatch);
        toast.success(res?.data?.msg);
      }
    } catch (err) {
      toast.error(t("A network error occurred"));

      console.log(err);
    }
  };

  return (
    <div className="updateInfo">
      <div className="inputSelect">
        <FormSelect
          inputs={inputsSelect}
          name={t("Save modifications")}
          setFormValues={setFormValues}
        />
        <Button name={t("Save modifications")} onClick={handleButtonClick} />
      </div>
      <div className="inputSelect">
        <FormSelect inputs={typeUser} />
        <Button name={t("Change")} />
      </div>
    </div>
  );
}

export default UpdateInfo;
