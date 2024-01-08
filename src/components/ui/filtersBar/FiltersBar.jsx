import { t } from "i18next";
import { useState } from "react";
import { videosLabels } from "/public/fakeData";
import { useNavigate, useParams } from "react-router-dom";

export default function FiltersBar({ data }) {
  const [select, setSelect] = useState("all");
  const navigate = useNavigate();
  const name = useParams().allroute;
  console.log(name);
  return (
    <div
      className=" flex justify-center md:justify-start w-full h-10 px-1 py-10 relative px-0 "
      style={{ width: "99%" }}
    >
      {data ? (
        <ul className="flex gap-2 absolute top-1/4 overflow-x-scroll w-full no-scrollbar">
          {videosLabels &&
            [...data].map((label, index) => (
              <li key={index}>
                <button
                  className={`${
                    name === label.link
                      ? "bg-violet-500 text-white"
                      : "text-gray-900"
                  } group h-fit w-fit py-1 px-3 border rounded-2xl capitalize whitespace-nowrap`}
                  onClick={() => {
                    setSelect(label.name);
                    navigate(`/${label.link}`);
                  }}
                >
                  {t(label.name)}
                </button>
              </li>
            ))}
        </ul>
      ) : (
        <ul className="flex gap-2 absolute top-1/4 overflow-x-scroll w-full no-scrollbar">
          {videosLabels &&
            ["all", ...videosLabels].map((label, index) => (
              <li key={index}>
                <button
                  className={`${
                    select === label
                      ? "bg-violet-500 text-white"
                      : "text-gray-900"
                  } group h-fit w-fit py-1 px-3 border rounded-2xl capitalize whitespace-nowrap`}
                  onClick={() => {
                    setSelect(label);
                  }}
                >
                  {t(label)}
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
