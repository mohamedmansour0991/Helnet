// import axios from "axios";
import { useEffect, useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Logimage from "../../components/logImage/logImage";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Signup = ({ setStep, setEmail }) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const direction = localStorage.getItem("direction");
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordShowConfirm, setPasswordShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, error, signIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [t] = useTranslation();
  useEffect(() => {
    if (error) navigate("/register");

    if (user) navigate("/home");

    // dispatch(deleteSign());
  }, [navigate, signIn, user]);

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    setLoading(true);
    console.log(e);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(`${URL}/api/register`, e, config);
      console.log(res);
      //  navigate("/login");
      setStep(2);
      setEmail(e.email);
      setLoading(false);
      // return res.data;
    } catch (error) {
      // return custom error message from backend if present
      setLoading(false);
      console.log(error, "error");
      if (
        error.response.data.data.email &&
        error.response.data.data.email.length > 0
      ) {
        toast.error(error.response.data.data.email[0]);
      }

      if (
        error.response.data.data.phone &&
        error.response.data.data.phone.length > 0
      ) {
        toast.error(error.response.data.data.phone[0]);
      }
    }

    // dispatch(signUpUser({ user, setLoading }));
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
      user_name: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("عنوان البريد الإلكتروني غير صالح")
        .matches(
          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
          "يجب ادخال ايميل صالح"
        )
        .required("مطلوب"),
      // باقي قواعد التحقق من الصحة

      password: Yup.string()
        .required("مطلوب")
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{12,}$/,
          "يجب أن تحتوي كلمة المرور على حرف كبير وحرف صغير ورقم ورمز خاص ويجب أن تكون على الأقل 12 أحرف."
        ),
      password_confirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "يجب أن تتطابق كلمات المرور")
        .required("مطلوب"),
      user_name: Yup.string().required("مطلوب"),
      last_name: Yup.string().required("مطلوب"),
      first_name: Yup.string().required("مطلوب"),
      phone: Yup.string()
        .matches(/^\d{11}$/, "يجب أن يحتوي رقم الهاتف على 11 رقمًا")
        .required("مطلوب"),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log("Form submitted with values:", values);
      handleSubmit(values);
    },
  });

  return (
    <div className={`container ${direction}`}>
      <div className="row m-md-5 d-flex align-items-center no-gutters">
        <div className="col-xl-6 col-12 d-none d-xl-block">
          <Logimage />
        </div>
        <div className="col-xl-6 col-12 bg-white px-md-5 logform">
          <div className=" p-2">
            <h1 className="title" style={{ marginBottom: "5px" }}>
              {t("welcome back")}
            </h1>
            <h3
              className="pb-3 "
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#96A0AD",
              }}
            >
              {t("We missed you please, log in for the latest news")}
            </h3>
            <button type="button" className="login-with-google-btn">
              {t("Sign in with Google")}
            </button>
            <h3
              className=""
              style={{
                textAlign: "center",
                fontSize: "18px",
                color: "#96A0AD",
              }}
            >
              {" "}
              {t("or")}{" "}
            </h3>

            <div className="form-style">
              <form onSubmit={formik.handleSubmit}>
                <label
                  htmlFor="email"
                  className="input-label"
                  style={{ marginBottom: "5px", fontWeight: "500" }}
                >
                  {t("The First Name")}  {" "}
                </label>

                <div className="input-block mb-3">
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                    style={
                      formik.touched.first_name &&
                      formik.errors.first_name && { border: "1px solid red" }
                    }
                    type="text"
                    name="first_name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="name"
                    placeholder="enter your name"
                    required
                  />
                  {formik.touched.first_name && formik.errors.first_name ? (
                    <div className="text-red">{formik.errors.first_name}</div>
                  ) : null}
                </div>
                <label
                  htmlFor="email"
                  className="input-label"
                  style={{ marginBottom: "5px", fontWeight: "500" }}
                >
                  {t("The Last Name")} {" "}
                </label>

                <div className="input-block mb-3">
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.last_name}
                    style={
                      formik.touched.last_name &&
                      formik.errors.last_name && { border: "1px solid red" }
                    }
                    type="text"
                    name="last_name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="last_name"
                    placeholder="enter your name"
                    required
                  />
                  {formik.touched.last_name && formik.errors.last_name ? (
                    <div className="text-red">{formik.errors.last_name}</div>
                  ) : null}
                </div>
                <label
                  htmlFor="email"
                  className="input-label"
                  style={{ marginBottom: "5px", fontWeight: "500" }}
                >
                  {t("Email")}
                </label>

                <div className="input-block mb-3">
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    style={
                      formik.touched.email &&
                      formik.errors.email && { border: "1px solid red" }
                    }
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="enter your email"
                    required
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red">{formik.errors.email}</div>
                  ) : null}
                </div>
                <label
                  htmlFor="email"
                  className="input-label"
                  style={{ marginBottom: "5px", fontWeight: "500" }}
                >
                  {t("User Name")} {" "}
                </label>

                <div className="input-block mb-3">
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.user_name}
                    style={
                      formik.touched.user_name &&
                      formik.errors.user_name && { border: "1px solid red" }
                    }
                    type="text"
                    name="user_name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="name"
                    placeholder="enter User Name"
                    required
                  />
                  {formik.touched.user_name && formik.errors.user_name ? (
                    <div className="text-red">{formik.errors.user_name}</div>
                  ) : null}
                </div>
                <label
                  htmlFor="email"
                  className="input-label"
                  style={{ marginBottom: "5px", fontWeight: "500" }}
                >
                  {t("Phone Number")}
                </label>

                <div className="input-block mb-3">
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    style={
                      formik.touched.phone &&
                      formik.errors.phone && { border: "1px solid red" }
                    }
                    type="text"
                    name="phone"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="name"
                    placeholder="Phone Number"
                    required
                  />

                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-red">{formik.errors.phone}</div>
                  ) : null}
                </div>

                <label
                  htmlFor="password"
                  className="input-label"
                  style={{ marginBottom: "5px", fontWeight: "500" }}
                >
                  {" "}
                  {t("Password")}
                </label>

                <div
                  className="form-group pb-3 p-relative"
                  style={{ position: "relative" }}
                >
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    style={
                      formik.touched.password &&
                      formik.errors.password && { border: "1px solid red" }
                    }
                    type={passwordShow ? "text" : "password"}
                    name="password"
                    placeholder="enter your password"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                  />
                  <button
                    className=" position-absolute  top-0  text-decoration-none text-muted"
                    style={
                      direction == "rtl"
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
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red">{formik.errors.password}</div>
                  ) : null}
                </div>

                <label
                  htmlFor="password"
                  className="input-label"
                  style={{ marginBottom: "5px", fontWeight: "500" }}
                >
                  {t("Confirm Password")}
                </label>

                <div
                  className="form-group pb-3"
                  style={{ position: "relative" }}
                >
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password_confirmation}
                    style={
                      formik.touched.password_confirmation &&
                      formik.errors.password_confirmation && {
                        border: "1px solid red",
                      }
                    }
                    type={passwordShowConfirm ? "text" : "password"}
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                  />
                  <button
                    className=" position-absolute  top-0  text-decoration-none text-muted"
                    type="button"
                    id="password-addon"
                    onClick={() => setPasswordShowConfirm(!passwordShowConfirm)}
                    style={
                      direction === "rtl"
                        ? { left: "10px" }
                        : { right: "20px", left: "auto" }
                    }
                  >
                    {passwordShowConfirm ? (
                      <i className="ri-eye-fill uil uil-eye-slash align-middle"></i>
                    ) : (
                      <i className="ri-eye-fill uil uil-eye align-middle"></i>
                    )}
                  </button>
                  {formik.touched.password_confirmation &&
                    formik.errors.password_confirmation ? (
                    <div className="text-red">
                      {formik.errors.password_confirmation}
                    </div>
                  ) : null}
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
                      marginTop: "0.5rem",
                      border: "none",
                    }}
                    disabled={loading}
                  // onClick={() => navigate("/check-code")}
                  >
                    {t("Next")}
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
                {" "}
                {t("Already have an account?")} {" "}
                <Link
                  style={{ color: "#873fa9", fontWeight: "600" }}
                  to="/login"
                >
                  {" "}
                  {t("Sign in")}{" "}
                </Link>{" "}
                {t("now and Join us")}{" "}
              </h3>
            </div>
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

export default Signup;
