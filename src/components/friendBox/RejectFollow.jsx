import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

function RejectedFollow({ user, setType }) {
  const { token } = useSelector((state) => state.auth);

  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const data = {
    following_id: user.id || user.user_id,
  };
  console.log(data);
  const handleFollow = async () => {
    setType(true);
    try {
      const res = await axios.post(`${URL}/api/follow-create`, data, {
        headers: {
          Accept: "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      onClick={() => handleFollow()}
      type="submit"
      className="btn btn-dark font-weight-bold logbtn gap-2"
      style={{
        background: " linear-gradient(#00ACFF75, #BD00FF58)",
        borderRadius: "26px",
        fontSize: "12px",
        padding: "10",
        fontWeight: "600",
        letterSpacing: "1px",
        height: "40px",
        border: "none",
        marginTop: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px 15px",
      }}
    >
      الغاء
    </button>
  );
}

export default RejectedFollow;
