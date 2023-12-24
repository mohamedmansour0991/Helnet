import analysis from "../../assets/images/analysis 1.png";
import restaurant from "../../assets/images/restaurant.png";
import hospital from "../../assets/images/hospital.png";
import clinic from "../../assets/images/clinic 1.png";
import pharmacy from "../../assets/images/pharmacy.png";
import office from "../../assets/images/office.png";
import gym from "../../assets/images/gym.png";
import Card from "../../components/card/card";
import ButtonsForm from "../../components/buttonsForm/buttonsForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Places = ({ email, setStep, setprev, settypeProvider }) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [t] = useTranslation();

  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    setLoading(true);
    let data = {
      email,
      job: type,
    };
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(`${URL}/api/add_job`, data, config);
      console.log(res);
      navigate("/");

      setLoading(false);
      // return res.data;
    } catch (error) {
      // return custom error message from backend if present
      setLoading(false);
      console.log(error, "error");
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <div className="container">
      <div className="row  no-gutters">
        <div
          className="bg-white p-5"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="title" style={{ marginBottom: "20px" }}>
            {" "}
            {t("Places")}{" "}
          </h1>
          <div className="form-style w-100" style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "wrap",
              }}
            >
              <Card
                name={"Games Hall"}
                type={type}
                setType={setType}
                imageSrc={gym}
                title={t("Games Hall")}
              />
              <Card
                name={"company"}
                type={type}
                setType={setType}
                imageSrc={office}
                title={t("company")}
              />
              <Card
                name={"pharmacy"}
                type={type}
                setType={setType}
                imageSrc={pharmacy}
                title={t("pharmacy")}
              />
              <Card
                name={"clinic"}
                type={type}
                setType={setType}
                imageSrc={clinic}
                title={t("clinic")}
              />
              <Card
                name={"hospital"}
                type={type}
                setType={setType}
                imageSrc={hospital}
                title={t("hospital")}
              />
              <Card
                name={"Training academy"}
                type={type}
                setType={setType}
                imageSrc={analysis}
                title={t("Training academy")}
              />
              <Card
                name={"restaurant"}
                type={type}
                setType={setType}
                imageSrc={restaurant}
                title={t("restaurant")}
              />

              {/* Add more CardComponent instances with different text */}
            </div>
            <form
              className="btnform w-100"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginTop: "3.5rem",
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="pb-2">
                <button
                  // type="submit"
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
                  onClick={() => {
                    settypeProvider(1);
                    setprev("");
                  }}
                >
                  {t("Back")}
                </button>
              </div>
              <div className="pb-2">
                <button
                  type="submit"
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
                  disabled={loading}
                  onClick={() => handleSubmit()}
                // onClick={() => navigate(next)}
                >
                  {t("Next")}
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
      </div>
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
  );
};

export default Places;
