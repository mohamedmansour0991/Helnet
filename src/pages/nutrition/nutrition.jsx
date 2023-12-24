import chef from "../../assets/images/chef.png";
import healthcare from "../../assets/images/healthcare.png";
import therapy from "../../assets/images/therapy.png";
import treadmill from "../../assets/images/treadmill.png";
import nutrition from "../../assets/images/nutrition.png";
import Card from "../../components/card/card";
import ButtonsForm from "../../components/buttonsForm/buttonsForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
const Nutrition = ({ email, setStep, setprev, settypeProvider }) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

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
      navigate("/language");

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
      <div className="row w-100 no-gutters">
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
            تغذية{" "}
          </h1>
          <div className="form-style w-100" style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "wrap",
                marginBottom: "40px",
              }}
            >
              <Card
                name={"cook"}
                type={type}
                setType={setType}
                imageSrc={chef}
                title="طباخ "
              />
              <Card
                name={"Health coach"}
                type={type}
                setType={setType}
                imageSrc={healthcare}
                title="مدرب صحة "
              />
              <Card
                name={"Psychologist"}
                type={type}
                setType={setType}
                imageSrc={therapy}
                title="أخصائي نفسي"
              />
              <Card
                name={"Fitness Trainer  "}
                type={type}
                setType={setType}
                imageSrc={treadmill}
                title="مدرب رياضي  "
              />
              <Card
                name={"nutrition specialist"}
                type={type}
                setType={setType}
                imageSrc={nutrition}
                title="أخصائي تغذية "
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
                  السابق
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

export default Nutrition;
