// import axios from "axios";
import { useEffect, useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Logimage from "../../components/logImage/logImage";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../rtk/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
const Login = () => {
  const direction = localStorage.getItem("direction");
  const [passwordShow, setPasswordShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error, msg } = useSelector((state) => state.auth);
  const [email, setEmail] = useState(
    Cookies.get("remember") ? Cookies.get("remember").email : ""
  );
  const [password, setPassword] = useState(
    Cookies.get("remember") ? Cookies.get("remember").password : ""
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (error) navigate("/login");
    // redirect authenticated user to profile screen
    if (user) navigate("/home");
  }, [navigate, user, error]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    let user = {
      email,
      password,
    };

    dispatch(loginUser({ user, setLoading }));
    Cookies.set("remember", JSON.stringify({ email, password }), {
      expires: 7,
    });
  };

  const [t] = useTranslation();
  const lang = localStorage.getItem("lang");
  return (
    <div className={`container ${direction}`}>
      <div className="row m-md-5 my-5  no-gutters flex-wrap">
        <div className="col-xl-6 col-12 d-none d-xl-block">
          <Logimage style={{ minHeight: "100%" }} />
        </div>
        <div className="col-xl-6 col-12 bg-white p-md-5 p-2 logform">
          <h1 className="title" style={{ marginBottom: "5px" }}>
            {t("welcome back")}
          </h1>
          <h3
            className="pb-3 "
            style={{ textAlign: "center", fontSize: "18px", color: "#96A0AD" }}
          >
            {t("We missed you please, log in for the latest news")}
          </h3>
          <button type="button" className="login-with-google-btn">
            {t("Sign in with Google")}
          </button>
          <h3
            className=""
            style={{ textAlign: "center", fontSize: "18px", color: "#96A0AD" }}
          >
            {" "}
            {t("or")}{" "}
          </h3>

          <div className="form-style">
            <form onSubmit={(e) => handleSubmit(e)}>
              <label
                htmlFor="email"
                className="input-label"
                style={{ marginBottom: "5px", fontWeight: "500" }}
              >
                {t("Email")}
              </label>

              <div className="input-block">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  defaultValue={email}
                  aria-describedby="emailHelp"
                  placeholder="enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div className="text-danger text-left ">{errors.login}</div> */}

              <label
                htmlFor="password"
                className="input-label"
                style={{ marginBottom: "5px", fontWeight: "500" }}
              >
                {" "}
                {t("Password")}
              </label>

              <div className="form-group pb-3" style={{ position: "relative" }}>
                <input
                  type={passwordShow ? "text" : "password"}
                  placeholder="enter your password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className=" position-absolute  top-0  text-decoration-none text-muted"
                  style={
                    direction === "rtl"
                      ? { left: "10px" }
                      : { right: "20px", left: "auto" }
                  }
                  type="button"
                  id="password-addon"
                  onClick={() => setPasswordShow(!passwordShow)}
                >
                  {passwordShow ? (
                    <i className="ri-eye-fill uil uil-eye-slash align-middle"></i>
                  ) : (
                    <i className="ri-eye-fill uil uil-eye align-middle"></i>
                  )}
                </button>
              </div>
              <p style={{ color: "red" }}>
                {msg && t("The password or email does not match")}
              </p>
              {/* <div className="text-danger">{errors.password}</div> */}

              <div className="d-flex align-items-center justify-content-between">
                <div style={{ color: "#A74ED1" }}>
                  <Link to="/forget-pass">{t("Forgot your password?")}</Link>
                </div>
                <div className="d-flex align-items-center">
                  <span
                    className="pl-2 font-weight-bold"
                    style={{ fontWeight: "500" }}
                    onClick={() => setRemember(!remember)}
                  >
                    {" "}
                    {t("remember me")}
                  </span>
                  <input
                    name=""
                    type="checkbox"
                    value=""
                    className="inpcheck mb-0"
                  />
                </div>
              </div>
              <div className="pb-2">
                <button
                  type="submit"
                  className="btn btn-dark w-100 font-weight-bold logbtn"
                  style={{
                    background: " linear-gradient(#00ACFF75, #BD00FF58)",
                    borderRadius: "16px",
                    fontSize: "24px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    marginTop: "3.5rem",
                    border: "none",
                  }}
                  disabled={loading}
                >
                  {t("Sign in")}
                </button>
              </div>
            </form>

            <h3
              className="pb-3 "
              style={{
                textAlign: "center",
                fontSize: "18px",
                marginTop: "10px",
              }}
            >
              {t("Don't have an account yet?")}
              <Link
                to={"/register"}
                style={{ color: "#873fa9", fontWeight: "600" }}
              >
                {" "}
                {t("Create an account now")}{" "}
              </Link>
              {t("Join us")}{" "}
            </h3>
          </div>
        </div>

        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default Login;
