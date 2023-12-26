import React from "react";
import cover from "../../assets/images/cover.png";
import character from "../../assets/images/character.png";
import vector from "../../assets/images/Vector.png";
import camera2 from "../../assets/images/camera2.png";
import { useSelector } from "react-redux";
function ProfileHeader({ openModal }) {
  const { user, error, msg } = useSelector((state) => state.auth);

  return (
    <div className="profile-card  text-start" style={{ marginTop: "6rem" }}>
      <img className="img-responsive " src={cover} alt="" />
      <div className="profile-info">
        <img className="profile-pic3" src={camera2} alt="" />
        <img className="profile-pic" src={character} alt="" />

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
              <img style={{ width: "30px" }} className="" src={vector} alt="" />{" "}
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
  );
}

export default ProfileHeader;
