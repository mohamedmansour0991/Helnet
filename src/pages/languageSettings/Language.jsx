import React from "react";
import FormSelect from "../../components/formSelect/FormSelect";

function Art() {
  const inputsSelect = [{ name: "اللون", type: "select" }];
  return (
    <div>
      <FormSelect inputs={inputsSelect} name="حفظ التعديلات" />
    </div>
  );
}

export default Art;
