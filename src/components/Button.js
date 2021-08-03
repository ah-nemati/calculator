import React from "react";

export default function Numbers({ value, handelclick, width }) {
  return (
    <button
      className={`w-${width} text-3xl text-center bg-${
        isNaN(value) & (value !== ".") ? `yellow` : `gray`
      }-400 p-6 border-2 cursor-pointer`}
      onClick={() => handelclick(value)}
    >
      {value}
    </button>
  );
}
