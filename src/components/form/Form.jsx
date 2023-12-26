/* eslint-disable react/no-children-prop */
import { useEffect, useRef, useState } from "react";
import { Button, Input, Modal } from "../ui";
import { t } from "i18next";
import Waveform from "./Waveform";
import delet from "../../assets/images/delete.png";
import recordbutton from "../../assets/images/recordbutton.png";

export default function Form({ isOpen, closeModal, title }) {
  const [formType, setFormType] = useState("");
  const [file, setFile] = useState("");
  const [showFile, setShowFile] = useState();
  useEffect(() => {
    switch (title) {
      case "View a used product":
        setFormType("usedProduct");
        break;

      case "Show the new product":
        setFormType("newProduct");
        break;

      case "Service Request":
        setFormType("service");
        break;

      case "Post Images":
        setFormType("images");
        break;

      case "Post Video":
        setFormType("video");
        break;

      case "Post Record":
        setFormType("record");
        break;

      default:
        setFormType("text");
        break;
    }
  }, [title]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setUploadComplete(false);

    if (file) {
      handleUpload(file);
    }
  };

  const handleUpload = (file) => {
    setUploading(true);

    // Simulating upload progress
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        } else {
          clearInterval(interval);
          setUploadComplete(true);
          setUploading(false);
          return prevProgress;
        }
      });
    }, 500);
  };

  const [url, setUrl] = useState();
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [timer, setTimer] = useState(0);
  const audioRef = useRef(null);

  const handleRecordClick = async () => {
    if (recording) {
      stopRecording();
    } else {
      await startRecording();
    }
  };
  useEffect(() => {
    let interval;
    if (recording) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [recording]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      const chunks = [];
      recorder.addEventListener("dataavailable", (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      });

      recorder.addEventListener("stop", () => {
        const audioBlob = new Blob(chunks, { type: "audio/webm" });
        addAudioElement(audioBlob);
      });

      recorder.start();
      setRecording(true);
      setMediaRecorder(recorder);
    } catch (error) {
      console.error("Error starting audio recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const addAudioElement = (audioBlob) => {
    const audioUrl = URL.createObjectURL(audioBlob);
    audioRef.current.src = audioUrl;
    console.log(audioRef);
    console.log(audioUrl);
    setUrl(audioUrl);
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title={t(title)}
      closeIcon={true}
      children={
        <form
          onSubmit={(e) => {
            e.preventDefault();
            closeModal();
          }}
        >
          {formType === "usedProduct" || formType === "newProduct" ? (
            <>
              <Input type="text" label={t("Product Name")} />
              <Input type="text" label={t("Product Type")} />
              <Input type="number" label={t("Price")} />
              <Input type="number" label={t("quanti")} />
            </>
          ) : null}

          {formType === "usedProduct" ? (
            <Input type="text" label={t("Product status")} />
          ) : null}

          {formType === "usedProduct" || formType === "newProduct" ? (
            <>
              <Input type="text" label={t("Attach a picture of the product")} />
            </>
          ) : null}

          {formType === "images" ? (
            <>
              <label
                htmlFor="file"
                className="rounded-3 text-center d-flex bg-white p-4 w-100 border-dashed"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "30px",
                }}
              >
                <h4 style={{ fontWeight: "500" }}>
                  Choose a file or drag & drop it here
                </h4>
                <h3 style={{ fontWeight: "500", color: "#A9ACB4" }}>
                  JPEG, PNG, PDF, and MP4 formats, up to 50MB
                </h3>
                <br />
                <input
                  type="file"
                  name="file[]"
                  required
                  onChange={handleFileChange}
                  id="file"
                  style={{ display: "none" }} // Hide the input element
                  accept=".jpeg, .jpg, .png, .pdf, .mp4"
                />
                <label htmlFor="file" className="browse-button">
                  {uploading ? "Uploading..." : "Browse File"}
                </label>
                {uploading && (
                  <div>
                    <p>Uploading: {uploadProgress}%</p>
                    <progress value={uploadProgress} max="100" />
                  </div>
                )}
                {uploadComplete && (
                  <div>
                    <p>Upload Complete!</p>
                  </div>
                )}
              </label>
            </>
          ) : null}
          {formType === "video" ? (
            <>
              <label
                htmlFor="file"
                className="rounded-3 text-center d-flex bg-white p-4 w-100 border-dashed"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "30px",
                }}
              >
                <h4 style={{ fontWeight: "500" }}>
                  Choose a file or drag & drop it here
                </h4>
                <h3 style={{ fontWeight: "500", color: "#A9ACB4" }}>
                  JPEG, PNG, PDF, and MP4 formats, up to 50MB
                </h3>
                <br />
                <input
                  type="file"
                  name="file[]"
                  required
                  onChange={handleFileChange}
                  id="file"
                  style={{ display: "none" }} // Hide the input element
                  accept=".jpeg, .jpg, .png, .pdf, .mp4"
                />
                <label htmlFor="file" className="browse-button">
                  {uploading ? "Uploading..." : "Browse File"}
                </label>
                {uploading && (
                  <div>
                    <p>Uploading: {uploadProgress}%</p>
                    <progress value={uploadProgress} max="100" />
                  </div>
                )}
                {uploadComplete && (
                  <div>
                    <p>Upload Complete!</p>
                  </div>
                )}
              </label>
            </>
          ) : null}

          {formType === "record" ? (
            <>
              {url ? (
                //  شكل الريكورد بعد التسجيل

                <div
                  className="rounded-3 text-center p-5 w-100 border-dashed"
                  style={{ marginBottom: "20px" }}
                >
                  <h4 style={{ fontWeight: "500", fontSize: "large" }}>
                    Your record
                  </h4>

                  <div className="wavebody">
                    <Waveform url={url} />
                    <div style={{ margin: "auto", display: "block" }}>
                      {" "}
                      <img src={delet} alt="" />
                    </div>
                  </div>
                </div>
              ) : (
                //   شكل الريكورد عند التسجيل

                <div
                  className="rounded-3 text-center d-flex bg-white w-100 btn-tertiary js-labelFile p-4 border-dashed"
                  style={{
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "200px",
                    margin: "0 auto",
                    fontSize: "48px",
                    cursor: "pointer",
                    marginBottom: "20px",
                  }}
                  onClick={handleRecordClick}
                >
                  <h4 style={{ fontWeight: "500", fontSize: "large" }}>
                    Tap here to start a record
                  </h4>
                  <img src={recordbutton} />

                  {recording && (
                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "10px",
                        fontSize: "24px",
                      }}
                    >
                      Recording...
                    </p>
                  )}

                  {recording && (
                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "10px",
                        fontSize: "24px",
                      }}
                    >
                      {formatTime(timer)}
                    </p>
                  )}

                  <audio ref={audioRef} controls className="audio1" />
                </div>
              )}
            </>
          ) : null}

          {formType === "service" ? (
            <>
              <Input type="tel" label={t("service name")} />

              <label htmlFor="formTextarea">{t("Details")}</label>
              <textarea
                id="formTextarea"
                className="w-full rounded-lg bg-red-50 resize-none px-2 h-28 text-xl w-100"
              />

              <Input type="number" label={t("Suggested price")} />
            </>
          ) : null}

          {formType === "usedProduct" ||
          formType === "newProduct" ||
          formType === "service" ? (
            <>
              <Input type="tel" label={t("Contact method")} />
            </>
          ) : null}

          <Button children={t("Post")} />
        </form>
      }
    />
  );
}
