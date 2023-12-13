import React from "react";
import FormSelect from "../../components/formSelect/FormSelect";

function UserInfo() {
  const inputsSelect = [
    { name: "من أين؟", type: "select" },
    { name: "أين تدرس؟", type: "select" },
    { name: "أين تعمل؟", type: "text" },
    { name: "متى ولدت؟", type: "date" },
  ];
  return (
    <div>
      <FormSelect inputs={inputsSelect} name="حفظ التعديلات" />
    </div>
  );
}

export default UserInfo;
