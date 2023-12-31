/* eslint-disable react/no-children-prop */
import { t } from "i18next";
import {
  Video3,
  image,
  profile1,
  send,
  voice,
  write,
  close1,
  close,
} from "../../../assets/images/icons";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import { useEffect, useState } from "react";
import Select from "../select/Select";
import Form from "../../form/Form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUpload } from "../../../rtk/slices/progressSlice";
import ButtonShare from "../button/ButtonShare";
import { CloseButton, Col } from "react-bootstrap";
import AudioPlayer from "../audioPlayer/AudioPlayer";
import ModalShare from "./ModalShare";

export default function CreatePost({
  placeholder,
  buttons = [
    { value: "Images", title: "Post Images", image: image },
    { value: "Video", title: "Post Video", image: Video3 },
    { value: "Record", title: "Post Record", image: voice },
  ],
}) {
  /////////////// main module ///////////////////
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Text Post");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="max-w-4xl w-full rounded-xl bg-white">
        <div
          className="flex gap-3 items-center pt-4 ps-3 pb-10"
          onClick={() => {
            openModal();
            setTitle("Post Text");
          }}
          role="button"
        >
          <img src={profile1} alt="" />
          <p className="flex gap-2 items-center">
            {placeholder ? (
              t(placeholder)
            ) : (
              <>
                {t("write something")} {"..."}
                <span>
                  <img src={write} alt="" />
                </span>
              </>
            )}
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
                      <img className="w-4" src={button.image} alt="" />
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
      <ModalShare
        isOpen={isOpen}
        
        closeModal={closeModal}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
