import { t } from "i18next";
import { useState } from "react";
import { videosLabels } from "/public/fakeData";
import "./FiltersBar.scss";

export default function FiltersBar() {
  const [select, setSelect] = useState("all");

  return (
    <div className="filtersBar">
      <ul className="flex gap-2 px-1 py-3">
        {videosLabels &&
          ["all", ...videosLabels].map((label, index) => (
            <li>
              <button
                key={index}
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
    </div>
  );
}
