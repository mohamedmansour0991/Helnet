import language from "../../assets/images/language.png";
import alphabet from "../../assets/images/alphabet.png";
import ButtonsForm from "../../components/buttonsForm/buttonsForm";
import Card from "../../components/card/card";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Language = () => {
  const [type, setType] = useState("");
  const [t, i18n] = useTranslation();
  const direction = localStorage.getItem("direction");
  const navigate = useNavigate();
  return (
    <div className={`container ${direction}`}>
      <div className="row m-5 no-gutters">
        <div className="bg-white p-5">
          <h1 className="title" style={{ marginBottom: "60px" }}>
            {" "}
            ما هي اللغة التي تود ان ترى بها الموقع؟
          </h1>

          <div className="form-style" style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "100px",
                flexFlow: "wrap",
              }}
              dir="ltr"
            >
              <div
                className={i18n.language === "en" ? "card active" : "card"}
                onClick={() => {
                  i18n.changeLanguage("en");
                  document.body.classList.add("en");
                  localStorage.setItem("lang", "en");
                  localStorage.setItem("direction", "ltr");
                }}
              >
                <img
                  src={language}
                  alt="Avatar"
                  style={{
                    height: "auto",
                    width: "auto",
                    padding: "26px 33px",
                    paddingBottom: "0",
                  }}
                />
                <div className="card-body" style={{ padding: "10px 1rem" }}>
                  <h5
                    className="card-title"
                    style={{ fontSize: "18px", fontWeight: "600" }}
                  >
                    English
                  </h5>
                </div>
              </div>
              <div
                className={i18n.language === "ar" ? "card active" : "card"}
                onClick={() => {
                  i18n.changeLanguage("ar");
                  document.body.classList.remove("en");
                  localStorage.setItem("lang", "ar");
                  localStorage.setItem("direction", "rtl");
                }}
              >
                <img
                  src={alphabet}
                  alt="Avatar"
                  style={{
                    height: "auto",
                    width: "auto",
                    padding: "26px 33px",
                    paddingBottom: "0",
                  }}
                />
                <div className="card-body" style={{ padding: "10px 1rem" }}>
                  <h5
                    className="card-title"
                    style={{ fontSize: "18px", fontWeight: "600" }}
                  >
                    Arabic
                  </h5>
                </div>
              </div>
            </div>

            <form
              className="btnform"
              style={{
                display: "flex",
                // justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginTop: "3.5rem",
              }}
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              {/* <div className="pb-2">
                <button
                  type="submit"
                  disabled
                  className="btn btn-dark font-weight-bold logbtn"
                  style={{
                    backgroundColor: "#D9D9D9",
                    borderRadius: "16px",
                    width: "250px",
                    maxWidth: "100%",
                    fontSize: "24px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    border: "none",
                  }}
                  //   onClick={() => navigate(prev)}
                >
                  السابق
                </button>
              </div> */}
              <div className="pb-2">
                <button
                  //   type="submit"
                  className="btn btn-dark font-weight-bold logbtn"
                  style={{
                    background: "linear-gradient(#00ACFF75, #BD00FF58)",
                    borderRadius: "16px",
                    width: "250px",
                    maxWidth: "100%",
                    fontSize: "24px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    border: "none",
                  }}
                  onClick={() => navigate("/")}
                >
                  التالي
                </button>
              </div>
              <style>
                {`
          @media (max-width: 768px) {
            .logbtn {
              width: 289px;
            }
          }
          @media (max-width: 1018px) {
            .btnform {
                justify-content: center!important;

            }
          }
        `}
              </style>
            </form>
          </div>
        </div>
        {/* <ToastContainer /> */}

        <style>
          {`
          @media (max-width: 538px) {
            .title {
                font-size: 32px;
            }
            .no-gutters{
                margin-left: 0!important;
                margin-right: 0!important;
                padding-left: 0!important;
                padding-right: 0!important;
            }
            .bg-white{
              
                padding-left: 0!important;
                padding-right: 0!important;
            }
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default Language;
