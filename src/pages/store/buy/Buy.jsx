import React from "react";
import CardStore from "../../../components/cardStore/CardStore";
import { Image, Image1, Overly } from "/src/assets/images/icons";
import ChooseType from "../../../components/chooseType/ChooseType";

function Buy() {
  const products = [
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "حصرى",
    },
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "حصرى",
    },
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "حصرى",
    },
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "الاكثر مبيعا",
    },
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 3,
      price: "70$",
    },
    {
      name: "مستعمل",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "الاكثر مبيعا",
    },
    {
      name: "عرض منتج",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
    },
  ];
  return (
    <>
      {/* <ChooseType /> */}
      <CardStore products={products} />
    </>
  );
}

export default Buy;
