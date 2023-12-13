import React from "react";
import FormSelect from "../../components/formSelect/FormSelect";

function Privacy() {
  const inputsSelect = [
    { name: "خصوصية الحساب", type: "select", select: ["Public", "Private"] },
    { name: "من يستطيع رؤية منشوراتي", type: "select" },
    { name: "من يستطيع رؤية معلوماتي  الشخصية", type: "select" },
  ];
  const typeUser = [{ name: "نوع المستخدم", type: "select" }];
  return (
    <div>
      <FormSelect inputs={inputsSelect} name="حفظ التعديلات" />
      {/* <FormSelect inputs={typeUser} name="تغيير" /> */}
    </div>
  );
}

export default Privacy;
