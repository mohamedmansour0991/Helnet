import React from "react";
import "./FormSelect.scss";
import Button from "../button/Button";
function FormSelect({ inputs, header, name, formValues, setFormValues }) {
  const handleInputChange = (inputName, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [inputName]: value,
    }));
    // console.log(formValues);
  };
  return (
    // <div className="inputSelect">
    <div className="inputSelect__All">
      {inputs?.map((tap, index) => (
        <div key={index} className={`${tap.class} input__select`}>
          <label>{tap.name}</label>
          {tap.type == "select" ? (
            <select
              onChange={(e) => handleInputChange(tap.state, e.target.value)}
            >
              {tap.select?.map((o, i) => (
                <option key={i}>{o}</option>
              ))}
            </select>
          ) : tap.type == "file" ? (
            <input
              type="file"
              multiple
              onChange={(e) =>
                handleInputChange(tap.state, [...e.target.files])
              }
            />
          ) : tap.type === "textarea" ? (
            <textarea
              defaultValue={tap?.value}
              onChange={(e) => handleInputChange(tap.state, e.target.value)}
            />
          ) : (
            <input
              defaultValue={tap?.value}
              type={tap.type}
              onChange={(e) => handleInputChange(tap.state, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
    // </div>
  );
}

export default FormSelect;
