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

export default function CreatePost({
  placeholder,
  buttons = [
    { value: "Images", title: "Post Images", image: image },
    { value: "Video", title: "Post Video", image: Video3 },
    { value: "Record", title: "Post Record", image: voice },
  ],
}) {
  const selectLabels = ["public", "privet"];
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
  data.append("classification_id", 1);
  if (photo.length > 0) {
    data.append("classification_id", 3);
    for (let i = 0; i < photo.length; i++) {
      data.append("image[]", photo[i]);
    }
  }
  if (video.length > 0) {
    data.append("classification_id", 2);
    data.append("video", video);
  }
  if (text) {
    data.append("text", text);
  }

  console.log(data);

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
      <Modal isOpen={isOpen} closeModal={closeModal} width="max-w-2xl">
        <div className="flex flex-row-reverse justify-between pb-4">
          <div className="flex items-center gap-2">
            <div className="w-100">
              <p className="px-2">{userFullName}</p>

              <Select
                className="flex gap-3 justify-between items-center px-2 py-0 bg-blue-50 rounded-xl max-w-28 w-fit max-h-8"
                selectLabels={selectLabels}
                withImage={true}
                hasIndictor={true}
                setprivacy={setprivacy}
              />
            </div>
            <img className="w-10 h-10" src={profile1} alt="" />
          </div>
          <button
            className="rounded-full bg-blue-50 h-fit p-1D"
            onClick={closeModal}
          >
            <img src={close1} alt="" />
          </button>
        </div>

        <textarea
          onChange={(e) => setText(e.target.value)}
          className={`w-full outline-none resize-none px-2 h-28 text-xl w-100 ${
            isArabic ? "text-right" : "text-left"
          }`}
          placeholder={
            placeholder
              ? t(placeholder)
              : `${t("write something")} ${t(",")} ${username}`
          }
        />

        {photo && (
          <div className="d-flex flex-wrap gap-3">
            {photo?.map((f, index) => (
              <div style={{ position: "relative" }}>
                <CloseButton
                  style={{ position: "absolute", cursor: "pointer" }}
                  // onClick={() => removeFile(index)}
                />
                <img
                  src={URL.createObjectURL(f)}
                  alt=""
                  style={{ width: "150px", height: "100px" }}
                />
              </div>
            ))}
          </div>
        )}

        {video && (
          <div className="d-flex flex-wrap gap-3">
            <video width="400" controls>
              <source src={URL.createObjectURL(video)} />
            </video>
          </div>
        )}
        {/* {record && (
          <audio src={URL.createObjectURL(record)}></audio>
          // <AudioPlayer data={URL.createObjectURL(record)} />
        )} */}

        <div
          className="sm:flex items-center justify-between gap-3 px-4 mb-3 border rounded-2xl"
          dir={direction}
        >
          {!placeholder && (
            <p className="d-none d-sm-block whitespace-nowrap">
              {t("add to your post")}
            </p>
          )}
          <div className="sm:flex flex flex-column justify-between flex-sm-row w-full flex-wrap">
            {buttons &&
              buttons.map((button) => (
                <button
                  key={button.value}
                  className="flex gap-1 items-center"
                  onClick={() => {
                    openForm();
                    setFormTitle(button.title);
                    // console.log(formTitle);
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
        </div>

        <Form
          isOpen={isFormOpen}
          closeModal={closeForm}
          title={formTitle}
          photo={photo}
          setPhoto={setPhoto}
          setVideo={setVideo}
          setRecord={setRecord}
        />

        <ButtonShare
          children={t("Post")}
          data={data}
          state={video && true}
          video={video}
        />
      </Modal>
    </>
  );
}
