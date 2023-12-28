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
  const selectLabels = ["public", "private"];
  const direction = localStorage.getItem("direction");

  const username = "كريم";
  const userFullName = "كريم سيف";

  /////////////// main module ///////////////////
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Text Post");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  /////////////// main module ///////////////////

  /////////////// store module ///////////////////
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("Text Post");

  function closeForm() {
    setIsFormOpen(false);
  }

  function openForm() {
    setIsFormOpen(true);
  }

  /////////////// main module ///////////////////

  const [isArabic, setIsArabic] = useState(false);

  useEffect(() => {
    setIsArabic(localStorage.getItem("i18nextLng") === "ar");
  }, []);

  const [openSelect, setOpenSelect] = useState(false);

  const [text, setText] = useState("");
  const [privacy, setprivacy] = useState("public");
  const [typePost, setTypePost] = useState("scientific");
  const [photo, setPhoto] = useState("");
  const [video, setVideo] = useState("");
  const [record, setRecord] = useState("");

  const data = new FormData();
  data.append("privacy", privacy);
  console.log(privacy);
  data.append("classification_id", 1);
  if (photo.length > 0) {
    data.append("classification_id", 3);
    for (let i = 0; i < photo.length; i++) {
      data.append("image[]", photo[i]);
    }
  }
  if (video) {
    data.append("classification_id", 2);
    // data.append("video", video);
  }
  if (record) {
    data.append("audio", record);
    data.append("classification_id", 4);
  }
  if (text) {
    data.append("text", text);
  }

  console.log(data);
  const removeFile = (index) => {
    const updatedFiles = [...photo];
    updatedFiles.splice(index, 1);
    setPhoto(updatedFiles);
  };
  return (
    <>
      <div className="createPost rounded-xl bg-white">
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
      <ModalShare isOpen={isOpen} closeModal={closeModal} setIsOpen={setIsOpen} />
    </>
  );
}
