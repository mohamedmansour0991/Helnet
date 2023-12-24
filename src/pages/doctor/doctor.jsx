import veterinary from "../../assets/images/veterinary.png";
import pharmacy from "../../assets/images/pharmacy.png";
import floss from "../../assets/images/floss.png";
import stethoscope from "../../assets/images/stethoscope.png";
import painful from "../../assets/images/painful.png";
import Card from "../../components/card/card";
import ButtonsForm from "../../components/buttonsForm/buttonsForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
const Doctor = ({ email, setStep, setprev, settypeProvider }) => {
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
      <div className="">
        <div className="bg-white p-5 d-flex align-items-center justify-content-center flex-column h-100vh">
          <h1 className="title" style={{ marginBottom: "66px" }}>
            {" "}
            طبيب{" "}
          </h1>
          <div className="form-style w-100" style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                // flexFlow: "wrap", height: "256px", overflow: "auto",
                marginBottom: "40px",
                flexWrap: "wrap",
              }}
            >
              <Card
                name={"physical therapy"}
                type={type}
                setType={setType}
                imageSrc={painful}
                title="علاج طبيعي"
              />
              <Card
                name={"veterinarian"}
                type={type}
                setType={setType}
                imageSrc={veterinary}
                title="طبيب بيطري"
              />
              <Card
                name={"pharmaceutical"}
                type={type}
                setType={setType}
                imageSrc={pharmacy}
                title="صيدلي"
              />
              <Card
                name={"dentist"}
                type={type}
                setType={setType}
                imageSrc={floss}
                title="طبيب أسنان "
              />
              <Card
                name={"human doctor"}
                type={type}
                setType={setType}
                imageSrc={stethoscope}
                title="طبيب بشري"
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

export default Doctor;
