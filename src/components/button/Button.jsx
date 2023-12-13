import React from "react";

function Button({ name }) {
  return (
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
      >
        {name}
      </button>
    </div>
  );
}

export default Button;
