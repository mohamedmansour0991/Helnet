import cover from "../../assets/images/cover.png";
import mg from "../../assets/images/mg.jpg";
import vector from "../../assets/images/Vector.png";
import camera2 from "../../assets/images/camera2.png";
import gallery from "../../assets/images/gallery.png";
import edit from "../../assets/images/edit.png";
import "./ProfileHeader.scss";
import { close } from "../../assets/images/icons";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { Button, Modal } from "../ui";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import { getUser } from "../../rtk/Api/Api";
function ProfileHeader({ openModal }) {
  const { user, error, token } = useSelector((state) => state.auth);
  const URL_API = import.meta.env.VITE_REACT_APP_API_KEY;

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [showDropdown1, setShowDropdown1] = useState(false);
  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    // height: "90%",
    p: 0,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [t] = useTranslation();
  const [lightboxOpen1, setLightboxOpen1] = useState(false);
  const openLightbox1 = () => setLightboxOpen1(true);
  const closeLightbox1 = () => setLightboxOpen1(false);

  const [selectedcover, setSelectedcover] = useState(cover);
  const [selectedphoto, setSelectedphoto] = useState(mg);

  // const handlecoverChange = (e) => {
  //   const coverfile = e.target.files[0];
  //   // setSelectedcover(coverfile)
  //   if (coverfile) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setSelectedcover(reader.result);
  //     };
  //     reader.readAsDataURL(coverfile);
  //   }
  // };

  const handlephotoChange = (e) => {
    const photofile = e.target.files[0];
    // setSelectedphoto(photofile)
    if (photofile) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedphoto(reader.result);
      };
      reader.readAsDataURL(photofile);
    }
  };

  const [isShareOpen, setIsShareOpen] = useState(false);
  const [photo, setPhoto] = useState("");
  // const [isShareOpen, setIsShareOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [typeImage, setTypeImage] = useState("");

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    setSelectedFile(...e.target.files);

    setUploadComplete(false);

    if (file) {
      handleUpload(e, type);
    }
  };

  const handleUpload = (e, type) => {
    setUploading(true);

    // Simulating upload progress
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        } else {
          console.log(e.target.files[0]);
          setPhoto(e.target.files[0]);
          clearInterval(interval);
          setUploadComplete(true);
          setUploading(false);
          // closeModal();
          // setTimeout(() => {
          //   if (type == "img") {
          //     setVideo("");
          //     setRecord("");
          //   } else if (type == "video") {
          //     setVideo(e.target.files[0]);
          //     setPhoto([]);
          //     setRecord("");
          //   } else if (type == "record") {
          //     setVideo("");
          //     setPhoto([]);
          //     setRecord(e.target.files[0]);
          //     handleUserChoice("");
          //   }
          // }, 500);
          return prevProgress;
        }
      });
    }, 500);
  };
  const dispatch = useDispatch();
  const handleUpdate = async (e) => {
    console.log(e);
    console.log("j");
    try {
      const res = await axios.post(`${URL_API}/api/${e}`, photo, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status == 200) {
        toast.success("Profile userCoverImage updated successfully");
        setIsShareOpen(false);
        setPhoto("");
        getUser(token, dispatch);
      }
      console.log(res);
    } catch (err) {
      setIsShareOpen(false);
      setPhoto("");
      console.log(err);
    }
  };

  return (
    <>
      <div className="profile-card  text-start" style={{ marginTop: "6rem" }}>
        <img
          className="img-responsive "
          src={selectedcover}
          alt=""
          onClick={toggleDropdown}
        />
        <div className="profile-info">
          <img
            className="profile-pic3"
            src={camera2}
            alt=""
            onClick={toggleDropdown}
          />
          {/* Dropdown */}
          <div
            className={`dropdown-menu cover photodropdown ${
              showDropdown ? "show" : ""
            }`}
          >
            <div
              className="dropdown-item photodropdownitem"
              onClick={openLightbox1}
            >
              <img src={edit} /> رؤية صورة الخلفية
            </div>
            <div
              className="dropdown-item photodropdownitem"
              onClick={() => {
                setIsShareOpen(true);
                setTypeImage("cover");
              }}
            >
              {/* <input
                type="file"
                name="file[]"
                required
                onChange={handlecoverChange}
                id="coverFileInput"
                style={{ display: "none" }}
                accept=".jpeg, .jpg, .png"
              /> */}
              <img
                src={gallery}
                style={{
                  backgroundColor: "#E9E9E9",
                  width: "26px",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              />{" "}
              <label htmlFor="">اختر صورة الخلفية</label>
            </div>
          </div>
          {/* showcover */}
          {/* <Modal
          open={lightboxOpen1}
          onClose={closeLightbox1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img className="w-100 rounded " src={selectedcover} />
          </Box>
        </Modal> */}

          <img
            className="profile-pic"
            src={selectedphoto}
            alt=""
            onClick={toggleDropdown1}
          />
          <img
            className="profile-pic4"
            src={camera2}
            alt=""
            onClick={toggleDropdown1}
          />
          {/* Dropdown */}
          <div
            className={`dropdown-menu photodropdown ${
              showDropdown1 ? "show" : ""
            }`}
            style={{ right: "174px", top: "28px" }}
          >
            <div
              className="dropdown-item photodropdownitem"
              onClick={handleOpen}
            >
              <img src={edit} /> رؤية صورة الشخصية
            </div>
            <div
              className="dropdown-item photodropdownitem"
              onClick={() => {
                setIsShareOpen(true);
                setTypeImage("img");
              }}
            >
              <input
                type="file"
                name="file[]"
                required
                onChange={handlephotoChange}
                id="photoFileInput"
                style={{ display: "none" }}
                accept=".jpeg, .jpg, .png"
              />
              <img
                src={gallery}
                style={{
                  backgroundColor: "#E9E9E9",
                  width: "26px",
                  padding: "6px",
                  borderRadius: "5px",
                }}
              />{" "}
              <label htmlFor="photoFileInput">اختر صورة شخصية</label>
            </div>
          </div>
          {/* showphoto */}
          {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img
              style={{ width: "auto" }}
              className="w-100 rounded "
              src={selectedphoto}
            />
          </Box>
        </Modal> */}

          <div
            className="d-flex align-items-center justify-content-between flex-wrap w-100  gap-2"
            style={{ paddingTop: "50px" }}
          >
            <div className="d-flex flex-column align-items-center gap-2">
              <div className="d-flex align-items-center">
                <h2 className="mb-0 pb-0 ">
                  {" "}
                  {user?.first_name} {user?.last_name}
                </h2>
                <img
                  style={{ width: "30px" }}
                  className=""
                  src={vector}
                  alt=""
                />{" "}
              </div>
              <h3 className="" style={{ opacity: "0.7", fontSize: "19px" }}>
                {" "}
                مبرمج فى ألمانيا
              </h3>
            </div>

            <div className="d-flex">
              <div className="hvr-underline-from-center" onClick={openModal}>
                {" "}
                طلب صداقة 20 .
              </div>
              <div className="hvr-underline-from-center" onClick={openModal}>
                {" "}
                صديق 320{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="pb-2">
          <button
            type="submit"
            className="btn btn-dark font-weight-bold logbtn"
            style={{
              background: " linear-gradient(#00ACFF75, #BD00FF58)",
              borderRadius: "11px",
              fontSize: "18px ",
              fontWeight: "600",
              letterSpacing: "1px",
              marginBottom: "0.5rem",
              marginLeft: "1rem",
              border: "none",
              width: "135px ",
              height: "38px ",
            }}
          >
            تعديل بياناتي
          </button>
        </div>
      </div>
      <Modal
        isOpen={isShareOpen}
        closeModal={() => setIsShareOpen(false)}
        title={t("update image Profile")}
        closeIcon={true}
        isFullScreen={false}
      >
        <>
          {photo ? (
            <div className="d-flex flex-wrap gap-3 mb-3 text-center justify-content-center">
              <div style={{ position: "relative" }}>
                <img
                  src={close}
                  style={{ position: "absolute", cursor: "pointer" }}
                  onClick={() => setPhoto("")}
                />
                <img
                  src={URL.createObjectURL(photo)}
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
              </div>
              <Button
                children="Update"
                onClick={() => {
                  if (typeImage == "cover") {
                    handleUpdate("profile/uploadUserCoverImage");
                  } else {
                    handleUpdate("profile/uploadUserImage");
                  }
                }}
              />
            </div>
          ) : (
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
                JPEG, PNG formats, up to 50MB
              </h3>
              <br />
              <input
                type="file"
                name="file[]"
                required
                onChange={(e) => handleFileChange(e, "img")}
                id="file"
                style={{ display: "none" }} // Hide the input element
                accept=".jpeg, .jpg, .png"
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
              {/* {uploadComplete && (
                <div>
                  <p>Upload Complete!</p>
                </div>
              )} */}
            </label>
          )}
        </>
      </Modal>
    </>
  );
}

export default ProfileHeader;
