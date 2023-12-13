import React from "react";
import FormSelect from "../../components/formSelect/FormSelect";

function Language() {
  const inputsSelect = [{ name: "اللغة", type: "select" }];
  const typeUser = [{ name: "نوع المستخدم", type: "select" }];
  return (
    <div>
      <FormSelect inputs={inputsSelect} name="حفظ التعديلات" />
    </div>
  );
}

export default Language;
