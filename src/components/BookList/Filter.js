"use client";

import { useState } from "react";

const Filter = () => {
  const [activeBtn, setActiveBtn] = useState("all");

  const handleFilter = (value) => {
    setActiveBtn(value);
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => handleFilter("all")}
        className={
          activeBtn === "all"
            ? "lws-filter-btn active-filter"
            : "lws-filter-btn"
        }
      >
        All
      </button>
      <button
        onClick={() => handleFilter("featured")}
        className={
          activeBtn === "featured"
            ? "lws-filter-btn active-filter"
            : "lws-filter-btn"
        }
      >
        Featured
      </button>
    </div>
  );
};

export default Filter;
