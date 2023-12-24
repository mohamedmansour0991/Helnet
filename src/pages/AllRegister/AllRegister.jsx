import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Signup from "../signup/signup";
import UserKind from "../userKind/userKind";
import Codecheck from "../codecheck/codecheck";
import Provider from "../provider/provider";

function AllRegister() {
  const { user, error, signIn } = useSelector((state) => state.auth);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (error) navigate("/register");
    // redirect authenticated user to profile screen
    if (signIn) navigate("/login");
    if (user) navigate("/home");

    // dispatch(deleteSign());
  }, [navigate, signIn, user, error]);

  const dispatch = useDispatch();
  return (
    <>
      {step === 1 ? (
        <Signup setStep={setStep} email={email} setEmail={setEmail} />
      ) : step === 2 ? (
        <Codecheck setStep={setStep} email={email} setEmail={setEmail} />
      ) : // <VerifyEmail setStep={setStep} email={email} setEmail={setEmail} />
      step === 3 ? (
        <UserKind setStep={setStep} email={email} setEmail={setEmail} />
      ) : (
        // <Langauge setStep={setStep} />
        <Provider setStep={setStep} email={email} setEmail={setEmail} />

        // <Color
        //   setStep={setStep}
        //   themeColor={themeColor}
        //   setThemecolor={setThemecolor}
        // />
      )}
    </>
  );
}

export default AllRegister;
