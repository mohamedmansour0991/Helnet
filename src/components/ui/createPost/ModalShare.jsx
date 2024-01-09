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
import { useDispatch, useSelector } from "react-redux";
import { addUpload } from "../../../rtk/slices/progressSlice";
import ButtonShare from "../button/ButtonShare";
import { CloseButton, Col } from "react-bootstrap";
import AudioPlayer from "../audioPlayer/AudioPlayer";

export default function ModalShare({
  isNormalPost = true,
  post,
  isOpen,
  closeModal,
  setIsOpen,
  placeholder,

  buttons,
}) {
  const selectLabels = ["public", "private"];
  const direction = localStorage.getItem("direction");
  const URL2 = import.meta.env.VITE_REACT_APP_API_KEY;
  // const history = useHistory();
  const { user } = useSelector((state) => state.auth);

  // Access the current path
  const currentPath = window.location.pathname.split("/")[1];
  console.log(currentPath);
  const username = "كريم";
  const userFullName = "كريم سيف";
  // const URL_API = import.meta.env.VITE_REACT_APP_API_KEY;

  /////////////// main module ///////////////////
  const [title, setTitle] = useState("Text Post");

  //   function closeModal() {
  //     setIsOpen(false);
  //   }

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

  const [text, setText] = useState(post?.text);
  const [privacy, setprivacy] = useState("public");
  const [photo, setPhoto] = useState([]);
  const [video, setVideo] = useState("");
  const [videoEdit, setVideoEdit] = useState(post?.video);
  const [imageEdit, setImageEdit] = useState(post?.image);
  const [recordEdit, setrecordEdit] = useState(post?.audio);
  const [record, setRecord] = useState("");
  const [url, setUrl] = useState();
  const data = new FormData();
  data.append("privacy", privacy);

  if (text) {
    data.append("classification_id", 1);
    data.append("text", text);
  }

  // image

  if (photo.length > 0) {
    // create
    data.append("classification_id", 3);
    for (let i = 0; i < photo.length; i++) {
      data.append("image[]", photo[i]);
    }
  } else if (imageEdit?.length > 0) {
    //edit
    data.append("classification_id", 3);
    for (let i = 0; i < imageEdit.length; i++) {
      data.append("image[]", imageEdit[i]);
    }
  }

  if (video) {
    data.append("classification_id", 2);
  } else if (videoEdit) {
    data.append("classification_id", 2);
  }
  if (record) {
    data.append("audio", record);
    data.append("classification_id", 4);
  } else if (recordEdit) {
    data.append("audio", record);
    data.append("classification_id", 4);
  }
  // if (url) {
  //   console.log(url);

  //   // data.append(
  //   //   "audio",
  //   //   fetch(url).then((response) => response.blob())
  //   // );
  //   // console.log(fetch(url).then((response) => response.blob()));

  //   // data.append("audio", URL.createObjectURL(url), "audio.wav");
  //   data.append("audio", url);
  //   data.append("classification_id", 4);
  // }

  if (url) {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        data.append("audio", blob, "audio.wav");
      })
      .catch((error) => {
        console.error("Error fetching audio file:", error);
      });
    data.append("classification_id", 4);
  }

  useEffect(() => {
    setText(post?.text);
    setImageEdit(post?.image);
  }, [post]);

  // remove image
  const removeFile = (index) => {
    const updatedFiles = [...photo];
    updatedFiles.splice(index, 1);
    setPhoto(updatedFiles);
  };
  // remove image edit
  const removeFileEdit = (index) => {
    const updatedFiles = [...imageEdit];
    updatedFiles.splice(index, 1);
    setImageEdit(updatedFiles);
  };

  const removeAllImages = () => {
    setPhoto([]);
  };
  const [formType, setFormType] = useState("");
  // console.log(post);
  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={() => {
          setVideo("");
          setIsOpen(false);
          setPhoto("");
          setText("");
          setRecord("");
        }}
        width="max-w-xl w-full"
      >
        <div className="flex flex-row-reverse justify-between pb-4">
          <div className="flex items-center gap-2">
            <div className="w-100">
              <p className="px-2">{user.first_name}</p>
              {isNormalPost && (
                <Select
                  className="flex gap-3 justify-between items-center px-2 py-0 bg-blue-50 rounded-xl max-w-28 w-fit max-h-8"
                  selectLabels={selectLabels}
                  withImage={true}
                  hasIndictor={true}
                  setprivacy={setprivacy}
                />
              )}
            </div>
            <img
              className="w-10 h-10"
              style={{ borderRadius: "50%" }}
              src={
                user.profile.image
                  ? `${URL2}/storage/${user.profile.image}`
                  : profile1
              }
              alt=""
            />
          </div>
          <button
            className="rounded-full bg-blue-50 h-fit p-1D"
            onClick={closeModal}
          >
            <img src={close1} alt="" />
          </button>
        </div>
        {currentPath != "store" ? (
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={`w-full outline-none resize-none px-2 h-28 text-xl w-100 ${
              isArabic ? "text-right" : "text-left"
            }`}
            placeholder={
              placeholder
                ? t(placeholder)
                : `${t("write something")} ${t(",")} ${user.first_name}`
            }
          />
        ) : (
          ""
        )}

        {photo.length > 0 ? (
          <div>
            <button
              className="w-full flex justify-center"
              onClick={removeAllImages}
            >
              <img src={close} alt="" />
            </button>
            <div className="d-flex flex-wrap gap-3 mb-3 relative">
              {photo?.map((f, index) => (
                <div style={{ position: "relative" }} key={index}>
                  <img
                    src={close}
                    style={{ position: "absolute", cursor: "pointer" }}
                    onClick={() => removeFile(index)}
                  />
                  <img
                    src={URL.createObjectURL(f)}
                    alt=""
                    style={{ width: "150px", height: "150px" }}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <>
              {imageEdit && (
                <div className="d-flex flex-wrap gap-3 mb-3">
                  {imageEdit?.map((f, index) => (
                    <div style={{ position: "relative" }} key={index}>
                      <img
                        src={close}
                        style={{ position: "absolute", cursor: "pointer" }}
                        onClick={() => removeFileEdit(index)}
                      />
                      <img
                        src={`${URL2}/storage/${f.image.path}`}
                        alt=""
                        style={{ width: "150px", height: "150px" }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          </>
        )}

        {video ? (
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-2">
            <video width="400" controls style={{ maxHeight: "350px" }}>
              <source src={URL?.createObjectURL(video)} />
            </video>
          </div>
        ) : (
          <>
            {videoEdit && (
              <>
                <img src={close1} alt="" onClick={() => setVideoEdit("")} />
                <div className="d-flex flex-wrap justify-content-center gap-3 mb-2">
                  <video width="400" controls style={{ maxHeight: "350px" }}>
                    <source src={`${URL2}/storage/videos/${videoEdit}`} />
                  </video>
                </div>
              </>
            )}
          </>
        )}
        {record ? (
          // <audio src={URL.createObjectURL(record)}></audio>
          <>
            <AudioPlayer data={URL?.createObjectURL(record)} />
          </>
        ) : (
          <>
            {recordEdit && (
              <>
                <img src={close1} alt="" onClick={() => setrecordEdit("")} />
                <AudioPlayer data={`${URL}/storage/${recordEdit}`} />
              </>
            )}
          </>
        )}

        {url && <AudioPlayer data={url} />}
        <div
          className="sm:flex items-center justify-between gap-3 px-4 mb-3 border rounded-2xl"
          dir={direction}
        >
          {isNormalPost && (
            <>
              {!placeholder && (
                <p className="d-none d-sm-block whitespace-nowrap">
                  {t("add to your post")}
                </p>
              )}
            </>
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
          setUrl={setUrl}
          url={url}
          setIsOpen={setIsOpen}
          isOpen={isFormOpen}
          closeModal={closeForm}
          title={formTitle}
          photo={photo}
          setIsFormOpen={setIsFormOpen}
          setPhoto={setPhoto}
          setVideo={setVideo}
          setRecord={setRecord}
          setFormType={setFormType}
          formType={formType}
        />

        <ButtonShare
          children={t("Post")}
          data={data}
          state={video && true}
          video={video}
          setText={setText}
          setIsOpen={setIsOpen}
          setPhoto={setPhoto}
          setRecord={setRecord}
          setVideo={setVideo}
          api={post ? `update_post/${post.id}` : `create_post`}
        />
      </Modal>
    </>
  );
}
