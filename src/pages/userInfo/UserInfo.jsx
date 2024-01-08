import React, { useEffect, useState } from "react";
import FormSelect from "../../components/formSelect/FormSelect";
import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function UserInfo() {
  const { token } = useSelector((state) => state.auth);
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  const [t] = useTranslation();
  const [formValues, setFormValues] = useState({});
  const [countries, setCountries] = useState([]);
  const [cities, setcities] = useState([]);
  const [city, setcity] = useState([]);
  const [county, setCounty] = useState("");
  const getDataCountry = async () => {
    try {
      const res = await axios.get(`${URL}/api/get_country`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(res.data.data);
      setCountries(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getDataCity = async (e) => {
    console.log(e);
    try {
      const res = await axios.get(`${URL}/api/get_city/${e}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      setcities(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataCountry();
  }, []);
  const inputsSelect = [
    // {
    //   name: t("Where are you from?"),
    //   type: "select",
    //   state: "from",
    //   select: countries.length > 0 && countries,
    // },
    // { name: t("where do you study?"), type: "select", state: "study" },
    { name: t("Where do you work?"), type: "text", state: "study_at" },
    { name: t("When were you born?"), type: "date", state: "borned_in" },
  ];
  const handleButtonClick = async () => {
    console.log(formValues);

    formValues.country_id = county;
    formValues.city_id = city;
    try {
      const res = await axios.post(
        `${URL}/api/profile/UpdateBio`,
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
        // await getUser(token, dispatch);
        toast.success(res?.data?.msg);
      }
    } catch (err) {
      toast.error(t("A network error occurred"));

      console.log(err);
    }
  };
  return (
    <div className="inputSelect">
      <div className="inputSelect__All">
        <div className={`input__select`}>
          <label>{t("Where are you from?")}</label>
          <select
            onChange={(e) => {
              getDataCity(e.target.value);
              setCounty(e.target.value);
            }}
          >
            <option value="">select</option>{" "}
            {countries?.map((o, i) => (
              <option key={i} value={o.id}>
                {o.name}
              </option>
            ))}
          </select>
        </div>
        <div className={`input__select`}>
          <label>{t("where do you study?")}</label>
          <select
            onChange={(e) => {
              // getDataCity(e.target.value);
              setcity(e.target.value);
            }}
          >
            <option value="">select</option>{" "}
            {cities?.map((o, i) => (
              <option key={i} value={o.id}>
                {o.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <FormSelect inputs={inputsSelect} setFormValues={setFormValues} />
      <Button name={t("Save modifications")} onClick={handleButtonClick} />
    </div>
  );
}

export default UserInfo;
