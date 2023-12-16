import { t } from "i18next";
import {
  Video3,
  image,
  profile1,
  send,
  voice,
  write,
} from "../../../assets/images/icons";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import { useState } from "react";
import Input from "../input/Input";

export default function CreatePost() {
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
            {t("write something...")}
            <span>
              <img src={write} alt="" />
            </span>
          </p>
        </div>
        <div className="flex justify-between bg-zinc-200 rounded-b-xl">
          <div className="flex items-center gap-6  ps-3">
            <button
              className="flex gap-1 items-center"
              onClick={() => {
                openModal();
                setTitle("Post Images");
              }}
            >
              <img src={image} alt="" />
              <p>{t("Images")}</p>
            </button>
            <button
              className="flex gap-1 items-center"
              onClick={() => {
                openModal();
                setTitle("Post Video");
              }}
            >
              <img src={Video3} alt="" />
              <p>{t("Video")}</p>
            </button>
            <button
              className="flex gap-1 items-center"
              onClick={() => {
                openModal();
                setTitle("Post Record");
              }}
            >
              <img src={voice} alt="" />
              <p>{t("Record")}</p>
            </button>
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
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={t(title)}
        closeIcon={true}
        children={<Input type="text" />}
      />
    </>
  );
}
