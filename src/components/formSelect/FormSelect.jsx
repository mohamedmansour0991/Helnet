import React from "react";
import "./FormSelect.scss";
import Button from "../button/Button";
function FormSelect({ inputs, header, name }) {
  return (
    <div className="inputSelect">
      <div className="inputSelect__All">
        {inputs.map((tap, index) => (
          <div className={`${tap.class} input__select`}>
            <label>{tap.name}</label>
            {tap.type == "select" ? (
              <select>
                {tap.select?.map((o) => (
                  <option>{o}</option>
                ))}
                <option>sd</option>
                <option>sd</option>
                <option>sd</option>
              </select>
            ) : tap.type === "textarea" ? (
              <textarea />
            ) : (
              <input type={tap.type} />
            )}
          </div>
        ))}
      </div>
      <Button name={name} />
    </div>
  );
}

export default FormSelect;
