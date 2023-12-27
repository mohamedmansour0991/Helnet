import { useDispatch, useSelector } from "react-redux";
import "./Button.scss";
import { useState } from "react";
import {
  addUpload,
  finishUpload,
  setPercentage,
} from "../../../rtk/slices/progressSlice";
import { refrechPosts } from "../../../rtk/slices/authSlice";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import axios from "axios";

const backgroundColor = localStorage.getItem("color");
export default function Button({
  children,
  data,
  type = "",
  border = "",
  className = "",
  color = "#fff",
  onclick,
  backgroundColor = null,
  onClick = () => {},
  ...rest
}) {
 
  return (
    <button
      type={type}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        borderWidth: border,
      }}
      className={`normalButton ${className} ${
        backgroundColor === null && "gradient"
      }`}
      {...rest}
    >
      <div className={`children ${className}`}>{children}</div>
    </button>
  );
}
