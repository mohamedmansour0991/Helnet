import React from "react";
import FormSelect from "../../components/formSelect/FormSelect";

function UpdateInfo() {
  const inputsSelect = [
    { name: "الاسم الاول", type: "text", class: "half" },
    { name: "الاسم الاخير", type: "text", class: "half" },
    { name: " البريد الالكتروني", type: "email", class: "" },
    { name: "نبذة مختصرة عنك", type: "textarea", class: "" },
  ];
  const typeUser = [{ name: "نوع المستخدم", type: "select" }];
  return (
    <div>
      <FormSelect inputs={inputsSelect} name="حفظ التعديلات" />
      <FormSelect inputs={typeUser} name="تغيير" />
    </div>
  );
}

export default UpdateInfo;
