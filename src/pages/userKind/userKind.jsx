import { useState } from "react";
import manager from "../../assets/images/project-manager.png";
import student from "../../assets/images/student.png";
import ButtonsForm from "../../components/buttonsForm/buttonsForm";
import Card from "../../components/card/card";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserKind = ({ email, setStep }) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    setLoading(true);
    let data = {
      email,
      service_provider: +type,
    };
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(`${URL}/api/service_provider`, data, config);
      console.log(res);
      //  navigate("/login");
      if (res.data.data == 1) {
        setStep(4);
      } else {
        navigate("/language");
      }
      setLoading(false);
      // return res.data;
    } catch (error) {
      // return custom error message from backend if present
      setLoading(false);
      console.log(error, "error");
      toast.error(error?.response?.data?.msg);
    }
  };
  const direction = localStorage.getItem("direction");

  return (
    <div className={`container ${direction}`}>
      <div className="">
        <div className="bg-white p-5 d-flex align-items-center justify-content-center flex-column h-100vh">
          <h1 className="title"> من هو المستخدم؟</h1>

          <div className="form-style w-100" style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                // marginBottom: "100px",
                flexFlow: "wrap",
              }}
            >
              <Card
                name={"0"}
                setType={setType}
                imageSrc={student}
                title=" مستخدم عادي "
                type={type}
              />
              <Card
                name={"1"}
                setType={setType}
                type={type}
                imageSrc={manager}
                title=" مقدم خدمة "
              />
            </div>
            <form
              className="btnform"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginTop: "3.5rem",
              }}
            >
              <div className="pb-2">
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
                  onClick={() => navigate(prev)}
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
                  disabled={!type || loading}
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

export default UserKind;
