import { useEffect, useRef, useState } from "react";
import Logimage from "../../components/logImage/logImage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Codecheck = ({ setStep, email, setEmail }) => {
  const formRef = useRef(null);
  const inputsRef = useRef([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    const form = formRef.current;
    const inputs = form.querySelectorAll("input");

    const KEYBOARDS = {
      backspace: 8,
      arrowLeft: 37,
      arrowRight: 39,
    };

    const handleInput = (e) => {
      const input = e.target;
      const nextInput = input.nextElementSibling;
      if (nextInput && input.value) {
        nextInput.focus();
        if (nextInput.value) {
          nextInput.select();
        }
      }
    };

    const handlePaste = (e) => {
      e.preventDefault();
      const paste = e.clipboardData.getData("text");
      inputs.forEach((input, i) => {
        input.value = paste[i] || "";
      });
    };

    const handleBackspace = (e) => {
      const input = e.target;
      if (input.value) {
        input.value = "";
        return;
      }

      input.previousElementSibling.focus();
    };

    const handleArrowLeft = (e) => {
      const previousInput = e.target.previousElementSibling;
      if (!previousInput) return;
      previousInput.focus();
    };

    const handleArrowRight = (e) => {
      const nextInput = e.target.nextElementSibling;
      if (!nextInput) return;
      nextInput.focus();
    };

    form.addEventListener("input", handleInput);
    inputs[0].addEventListener("paste", handlePaste);

    inputs.forEach((input) => {
      input.addEventListener("focus", (e) => {
        setTimeout(() => {
          e.target.select();
        }, 0);
      });

      input.addEventListener("keydown", (e) => {
        switch (e.keyCode) {
          case KEYBOARDS.backspace:
            handleBackspace(e);
            break;
          case KEYBOARDS.arrowLeft:
            handleArrowLeft(e);
            break;
          case KEYBOARDS.arrowRight:
            handleArrowRight(e);
            break;
          default:
        }
      });
    });

    // Cleanup event listeners
    return () => {
      form.removeEventListener("input", handleInput);
      inputs[0].removeEventListener("paste", handlePaste);
      inputs.forEach((input) => {
        input.removeEventListener("focus", (e) => {
          setTimeout(() => {
            e.target.select();
          }, 0);
        });
        input.removeEventListener("keydown", (e) => {
          switch (e.keyCode) {
            case KEYBOARDS.backspace:
              handleBackspace(e);
              break;
            case KEYBOARDS.arrowLeft:
              handleArrowLeft(e);
              break;
            case KEYBOARDS.arrowRight:
              handleArrowRight(e);
              break;
            default:
          }
        });
      });
    };
  }, []);
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    const codeValues = inputsRef.current.map((input) => input.value);
    const numericCode = codeValues.join(""); // Combine individual values into a single string
    console.log(numericCode);
    setLoading(true);
    e.preventDefault();
    let data = {
      email,
      otp: numericCode,
    };
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(`${URL}/api/code_verified`, data, config);
      console.log(res);
      //  navigate("/login");
      setStep(3);
      setLoading(false);
      // return res.data;
    } catch (error) {
      // return custom error message from backend if present
      setLoading(false);
      console.log(error, "error");
      toast.error(error?.response?.data?.msg);
    }

    // dispatch(signUpUser({ user, setLoading }));
  };
  const [count, setCount] = useState(180);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const resetCode = async () => {
    // setLoading(true);
    setCount(180);
    let data = {
      email,
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          withCredentials: false,
        },
      };
      const res = await axios.post(`${URL}/api/resend_code`, data, config);
      if (res.data.status == 201) {
        console.log("res", res);
        // setLoading(false);
        toast.success(res?.data?.msg);
        setLoading(false);
      } else {
        console.log(res);
        setLoading(false);
        toast.error(res?.response?.data?.msg);
      }
    } catch (error) {
      // setLoading(false);
      toast.error(error?.response?.data?.msg);
      console.log(error);
      setLoading(false);
      // setError(true);
    }
  };
  const direction = localStorage.getItem("direction");

  return (
    <div className={`container ${direction}`}>
      <div className="row m-md-5 no-gutters">
        <div className="col-xl-6 d-none d-xl-block">
          <Logimage style={{ minHeight: "100%" }} />
        </div>
        <div className="col-xl-6 bg-white p-5 logform">
          <h1 className="title" style={{ marginBottom: "5px" }}>
            {" "}
            افحص بريدك الالكتروني
          </h1>
          <h3
            className="pb-3 "
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "#96A0AD",
              marginBottom: "120px",
            }}
          >
            {" "}
            لقد ارسلنا الرمز إلى بريدك الالكتروني{" "}
          </h3>

          <div className="form-style" style={{ textAlign: "end" }}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div action="#" className="codeform" dir="ltr" ref={formRef}>
                <div
                  className="d-flex mb-3"
                  style={{ justifyContent: "center" }}
                >
                  <input
                    type="tel"
                    maxLength="1"
                    pattern="[0-9]"
                    className="form-control"
                    placeholder="-"
                    ref={(el) => (inputsRef.current[0] = el)}
                  />
                  <input
                    type="tel"
                    maxLength="1"
                    pattern="[0-9]"
                    className="form-control"
                    placeholder="-"
                    ref={(el) => (inputsRef.current[1] = el)}
                  />
                  <input
                    type="tel"
                    maxLength="1"
                    pattern="[0-9]"
                    className="form-control"
                    placeholder="-"
                    ref={(el) => (inputsRef.current[2] = el)}
                  />
                  <input
                    type="tel"
                    maxLength="1"
                    pattern="[0-9]"
                    className="form-control"
                    placeholder="-"
                    ref={(el) => (inputsRef.current[3] = el)}
                  />
                </div>
              </div>

              <div className="pb-2" style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  className="btn btn-dark w-70 font-weight-bold logbtn"
                  style={{
                    background: " linear-gradient(#00ACFF75, #BD00FF58)",
                    borderRadius: "16px",
                    padding: ".375rem 4.75rem",
                    fontSize: "24px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    marginTop: "2.5rem",
                    border: "none",
                  }}
                  disabled={loading}
                  // onClick={() => navigate("/user-kind")}
                >
                  أرسل الكود
                </button>
              </div>
            </form>

            {count === 0 ? (
              <h3
                className="pb-3 "
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  marginTop: "10px",
                }}
              >
                لم يصلك الرمز؟
                <a
                  style={{
                    color: "#873fa9",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={() => resetCode()}
                >
                  {" "}
                  إعادة إرسال الرمز{" "}
                </a>{" "}
              </h3>
            ) : (
              <p className="mt-2 text-center">
                Time Remaining: {count} seconds
              </p>
            )}
          </div>
        </div>

        {/* <ToastContainer /> */}

        <style>
          {`
          @media (max-width: 1279px) {
            
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

export default Codecheck;
