import React from "react";
import FormSelect from "../../components/formSelect/FormSelect";

function ChangePassword() {
  const inputsSelect = [
    { name: "كلمة المرور القديمة", type: "password" },
    { name: "كلمة المرور الجديدة", type: "password" },
    { name: "تاكيد كلمة المرور الجديدة", type: "password" },
  ];
  return (
    <div>
      <FormSelect inputs={inputsSelect} name="حفظ التعديلات" />
    </div>
  );
}

export default ChangePassword;
