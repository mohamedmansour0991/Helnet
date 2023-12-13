import React from "react";
import FormSelect from "../../components/formSelect/FormSelect";

function Support() {
  const inputsSelect = [
    { name: "اكتب رسالتك ثم ارسلها للدعم الفني", type: "textarea" },
   
  ];
  return (
    <div>
      <FormSelect inputs={inputsSelect} name="ارسال" />
    </div>
  );
}

export default Support;
