import { t } from "i18next";
import {
  Video3,
  image,
  profile1,
  send,
  voice,
  write,
  publicIcon,
  close1,
} from "../../../assets/images/icons";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import { useEffect, useState } from "react";
import Input from "../input/Input";
import Dropdown from "../dropdown/Dropdown";

export default function CreatePost() {
  const buttons = [
    // { value: "Text", title: "Post Text" },
    { value: "Images", title: "Post Images", image: image },
    { value: "Video", title: "Post Video", image: Video3 },
    { value: "Record", title: "Post Record", image: voice },
  ];

  const username = "كريم";
  const userFullName = "كريم سيف";

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Text Post");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function openModal() {
    setIsOpen(true);
  }

  //   ${isArabic ? "text-right" : "text-left"}
  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    setIsArabic(localStorage.getItem("i18nextLng") === "ar");
  }, []);

  return (
    <>
      <div className="createPost rounded-xl bg-white">
        <div
          className="flex gap-3 items-center  pt-4 ps-3 pb-10"
          onClick={() => {
            openModal();
            setTitle("Post Text");
          }}
          role="button"
        >
          <img src={profile1} alt="" />
          <p className="flex gap-2 items-center">
            {t("write something") + "..."}
            <span>
              <img src={write} alt="" />
            </span>
          </p>
        </div>
        <div className="flex justify-between bg-zinc-200 rounded-b-xl">
          <div className="flex items-center gap-6  ps-3">
            {buttons &&
              buttons.map((button) => (
                <button
                  key={button.value}
                  className="flex gap-1 items-center"
                  onClick={() => {
                    openModal();
                    setTitle(t(button.title));
                  }}
                  children={
                    <>
                      <img src={button.image} alt="" />
                      <p>{t(button.value)}</p>
                    </>
                  }
                />
              ))}
          </div>
          <Button
            className="w-fit rounded-none rounded-ee-xl"
            onClick={() => {
              openModal();
              setTitle("Post Text");
            }}
          >
            <img src={send} alt="" />
          </Button>
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} width="max-w-2xl">
        <div className="flex flex-row-reverse justify-between pb-4">
          <div className="flex gap-2">
            <div>
              <p>{userFullName}</p>
              {/* <Dropdown /> */}
              <select
                className="px-2 py-1 bg-slate-200 rounded-full"
                name=""
                id=""
              >
                <option value="public">
                  {t("public")}
                  {/* <img src={publicIcon} alt="" /> */}
                </option>
                <option value="privet">{t("privet")}</option>
              </select>
            </div>
            <img className="w-10 h-10" src={profile1} alt="" />
          </div>
          <button className="rounded-full bg-slate-200 h-fit p-1">
            <img src={close1} alt="" />
          </button>
        </div>

        <textarea
          className={`w-full outline-none resize-none px-2 h-28 text-xl ${
            isArabic ? "text-right" : "text-left"
          }`}
          placeholder={`${t("write something")} ${t(",")} ${username}`}
        />

        <div className="flex flex-row-reverse items-center justify-between px-4 mb-3 border rounded-2xl">
          <p>{t("add to your post")}</p>
          <div className="flex flex-row-reverse items-center gap-6">
            {buttons &&
              buttons.map((button) => (
                <button
                  key={button.value}
                  className="flex gap-1 items-center"
                  onClick={() => {}}
                  children={
                    <>
                      <p>{t(button.value)}</p>
                      <img src={button.image} alt="" />
                    </>
                  }
                />
              ))}
          </div>
        </div>

        <Button children={t("Post")} />
      </Modal>
    </>
  );
}
