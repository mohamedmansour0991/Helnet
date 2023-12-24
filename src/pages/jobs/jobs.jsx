import cooperation from "../../assets/images/cooperation.png";
import social from "../../assets/images/social.png";
import accounting from "../../assets/images/accounting.png";
import mayor from "../../assets/images/stethoscope.png";
import influencer from "../../assets/images/influencer.png";
import music from "../../assets/images/music.png";
import dubbing from "../../assets/images/dubbing.png";
import paint from "../../assets/images/paint.png";
import camera from "../../assets/images/camera.png";
import developer from "../../assets/images/developer.png";
import law from "../../assets/images/law.png";
import female from "../../assets/images/female.png";
import hat from "../../assets/images/hat.png";
import Card from "../../components/card/card";
import ButtonsForm from "../../components/buttonsForm/buttonsForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Jobs = ({ email, setStep, setprev, settypeProvider }) => {
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
    <div className={`container`}>
      <div className="row no-gutters w-100">
        <div className="bg-white p-5 w-100">
          <h1 className="title" style={{ marginBottom: "20px" }}>
            {" "}
            وظائف{" "}
          </h1>
          <div className="form-style w-100" style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "wrap",
             
          
               
                flexWrap: "wrap",
              }}
            >
              <Card
                name={"engineer"}
                type={type}
                setType={setType}
                imageSrc={hat}
                title="مهندس"
              />
              <Card
                name={"teacher"}
                type={type}
                setType={setType}
                imageSrc={female}
                title="مدرس"
              />
              <Card
                name={"lawyer"}
                type={type}
                setType={setType}
                imageSrc={law}
                title="محامي"
              />
              <Card
                name={"programmer"}
                type={type}
                setType={setType}
                imageSrc={developer}
                title="مبرمج "
              />
              <Card
                name={"photographer"}
                type={type}
                setType={setType}
                imageSrc={camera}
                title="مصور "
              />
              <Card
                name={"artist"}
                type={type}
                setType={setType}
                imageSrc={paint}
                title="فنان "
              />
              <Card
                name={"Voice over"}
                type={type}
                setType={setType}
                imageSrc={dubbing}
                title="معلق صوتي "
              />
              <Card
                name={"entertaining content"}
                type={type}
                setType={setType}
                imageSrc={music}
                title="محتوى ترفيهي"
              />
              <Card
                name={"General content provider"}
                type={type}
                setType={setType}
                imageSrc={influencer}
                title="مقدم محتوى عام  "
              />
              <Card
                name={"Politician"}
                type={type}
                setType={setType}
                imageSrc={mayor}
                title="سياسي "
              />
              <Card
                name={"accountant"}
                type={type}
                setType={setType}
                imageSrc={accounting}
                title="محاسب"
              />
              <Card
                name={"Commercial marketer"}
                type={type}
                setType={setType}
                imageSrc={social}
                title="مسوق تجاري  "
              />
              <Card
                name={"business pioneers"}
                type={type}
                setType={setType}
                imageSrc={cooperation}
                title="رواد أعمال "
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
            {/* <ButtonsForm next={"/doctor"} prev={"/user-kind"} /> */}
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

export default Jobs;
