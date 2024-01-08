import cover from "../../assets/images/cover.png";
import mg from "../../assets/images/mg.jpg";
import vector from "../../assets/images/Vector.png";
import camera2 from "../../assets/images/camera2.png";
import gallery from "../../assets/images/gallery.png";
import edit from "../../assets/images/edit.png";
import "./ProfileHeader.scss";
import { close, home } from "../../assets/images/icons";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "../ui";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import { getUser } from "../../rtk/Api/Api";
import { getDataProfile } from "../posts/getDataPost";
import { useParams } from "react-router-dom";
import graduation from "../../assets/images/graduation.png";
import cake from "../../assets/images/cake.png";
import Actions from "../friendBox/Actions";
import AddFollow from "../friendBox/AddFollow";
import RejectedFollow from "../friendBox/RejectFollow";
function ProfileHeader({ openModal, setMainMenu, mainMenu }) {
  const { user, error, token } = useSelector((state) => state.auth);
  const URL_API = import.meta.env.VITE_REACT_APP_API_KEY;

  const params = useParams().user_name;
  const [change, setChange] = useState(false);
  const { items } = getDataProfile(
    token,

    `profile/${params}`,
    change
  );
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

          return prevProgress;
        }
      });
    }, 500);
  };
  const dispatch = useDispatch();
  const handleUpdate = async (e) => {
    console.log(e);

    try {
      const res = await axios.post(
        `${URL_API}/api/${e}`,
        { image: photo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status == 200) {
        setChange(!change);
        toast.success("Profile img updated successfully");
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
  const handleUpdateCover = async (e) => {
    console.log(e);
    console.log("j");
    console.log(photo);
    try {
      const res = await axios.post(
        `${URL_API}/api/${e}`,
        { cover: photo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status == 200) {
        setChange(!change);
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

  // const [type, setType] = useState(items.follow == "unfriend" ? true : false);

  // useEffect(() => {
  //   console.log(type);
  //   setMainMenu(items);
  //   setType(items.follow == "unfriend" ? true : false);
  // }, [items]);


  const [type, setType] = useState(false);

  useEffect(() => {
    if (items && items.follow) {
      console.log(items.follow);
      setType(items.follow === "unfriend");
      setMainMenu(items);
    }
  }, [items]);




  return (
    <>
      <div className="profile-card  text-start" style={{ marginTop: "6rem" }}>
        <div className="">
          {items?.cover_Img ? (
            <img
              className="img-responsive "
              src={`${URL_API}/storage/${items?.cover_Img}`}
              alt=""
              onClick={toggleDropdown}
            />
          ) : (
            <img
              className="img-responsive "
              src={selectedcover}
              alt=""
              onClick={toggleDropdown}
            />
          )}
          {items && items.user_id && items.user_id !== user.id && (
            <div className="p-2">
              {type ? (
                <AddFollow user={items} setType={setType} />
              ) : (
                <RejectedFollow user={items} setType={setType} />
              )}
            </div>
          )}
        </div>

        <div className="profile-info">
          <Dropdown
            buttonData={<img className="profile-pic3" src={camera2} alt="" />}
            labels={["See the background image", "Choose a background image"]}
            post_id={user.id}
            post={user}
            top="-top-8"
            handleButtons={(label) => {
              if (label === "See the background image") {
                openLightbox1;
              } else if (label === "Choose a background image") {
                setIsShareOpen(true);
                setTypeImage("cover");
              }
            }}
          />

          {items?.user_img ? (
            <img
              className="profile-pic"
              src={`${URL_API}/storage/${items?.user_img}`}
              alt=""
              onClick={toggleDropdown}
              style={{ width: "130px", height: "130px" }}
            />
          ) : (
            <img
              className="profile-pic"
              src={selectedphoto}
              alt=""
              onClick={toggleDropdown1}
            />
          )}

          {/* <img
            className="profile-pic4"
            src={camera2}
            alt=""
            onClick={toggleDropdown1}
          /> */}

          <div className="profile-pic4">
            <Dropdown
              buttonData={<img src={camera2} alt="" />}
              labels={["See profile picture", "Choose a personal photo"]}
              post_id={user.id}
              post={user}
              top="-top-8"
              position="right-10"
              handleButtons={(label) => {
                if (label === "See profile picture") {
                  handleOpen;
                } else if (label === "Choose a personal photo") {
                  setIsShareOpen(true);
                  setTypeImage("img");
                }
              }}
            />
          </div>
          {/* Dropdown */}

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
                  {items?.first_name} {items?.last_name}
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

            {/* <div className="d-flex">
              <div className="hvr-underline-from-center" onClick={openModal}>
                {" "}
                طلب صداقة 20 .
              </div>
              <div className="hvr-underline-from-center" onClick={openModal}>
                {" "}
                صديق 320{" "}
              </div>
            </div> */}
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
        hasCloseButton
        closeButtonLeft
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
                    handleUpdateCover("profile/uploadUserCoverImage");
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
