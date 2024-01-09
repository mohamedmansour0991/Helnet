import React, { useState } from "react";
import { Button, Input } from "../ui";
import { t } from "i18next";
import FormSelect from "../formSelect/FormSelect";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import {
  refrechPostsProductNews,
  refrechServicese,
} from "../../rtk/slices/productSlice";
function EditPostsServices({
  formType,
  setIsFormOpen,
  post,
  setIsOpenservicw,
}) {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({});
  const [formValuesUsed, setFormValuesUsed] = useState({});
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const inputsSelectUsedNew = [
    { name: t("Product Name"), type: "text", state: "name" },
    { name: t("Product Type"), type: "text", state: "type" },
    { name: t("Price"), type: "number", state: "price" },
    { name: t("quanti"), type: "number", state: "quantity" },
    {
      name: t("Attach a picture of the product"),
      type: "file",
      state: "image",
    },
    { name: t("Contact method"), type: "tel", state: "contact" },
  ];
  const inputsSelectUsed = [
    { name: t("Product status"), type: "text", state: "status" },
  ];
  const inputsSelectService = [
    { name: t("service name"), type: "tel", state: "text", value: post?.text },
    {
      name: t("Details"),
      type: "textarea",
      state: "details",
      value: post?.details,
    },
    {
      name: t("Suggested price"),
      type: "number",
      state: "price",
      value: post?.price,
    },
    {
      name: t("Contact method"),
      type: "tel",
      state: "contact",
      value: post?.contact,
    },
  ];

  const handleClick = async () => {
    setIsOpenservicw(false);
    const data = { ...formValues, ...formValuesUsed };
    if (formType == "newProduct") {
      data.old = 0;
    }
    if (formType == "usedProduct") {
      data.old = 1;
    }
    if (formType == "service") {
      data.classification_id = 5;
      data.privacy = "public";
    }
    if (!data?.text) {
      data.text = post?.text;
    }
    if (!data?.details) {
      data.details = post?.details;
    }
    if (!data?.price) {
      data.price = post?.price;
    }
    if (!data?.contact) {
      data.contact = post?.contact;
    }
    console.log(data);
    const formData = new FormData();
    // Append form data to the FormData object
    if (data?.image?.length > 0) {
      for (let i = 0; i < data?.image.length; i++) {
        formData.append("image[]", data?.image[i]);
      }
    }

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      if (formType == "service") {
        const res = await axios.post(
          `${URL}/api/post/update_service/${post.id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "multipart/form-data",
            },
          }
        );
        if (res.status == 200) {
          console.log(res);
          dispatch(refrechServicese(res.data.original.data));
          toast.success("تم تحديث المنشور");
        }
      } else {
        const res = await axios.post(
          `${URL}/api/product/create-product`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "multipart/form-data",
            },
          }
        );
        console.log("asdgjhad", res);
        if (res.status == 201) {
          toast.success("تم نشر المنشور");
          dispatch(refrechPostsProductNews(res.data.data));
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("You must be a service provider to create a new product");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // closeModal();
      }}
    >
      {formType === "usedProduct" || formType === "newProduct" ? (
        <>
          <FormSelect
            inputs={inputsSelectUsedNew}
            setFormValues={setFormValues}
          />
        </>
      ) : null}
      {formType === "usedProduct" ? (
        <>
          <FormSelect
            inputs={inputsSelectUsed}
            setFormValues={setFormValuesUsed}
          />
        </>
      ) : null}
      {formType === "service" ? (
        <>
          <FormSelect
            inputs={inputsSelectService}
            setFormValues={setFormValues}
          />
        </>
      ) : null}
      <Button children={t("Post")} onClick={handleClick} />{" "}
    </form>
  );
}

export default EditPostsServices;
