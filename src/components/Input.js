import React from "react";

export default function Screen({ prev, curr }) {
  return (
    <div className="bg-gray-500 text-right break-words rounded-tr-md rounded-tl-md">
      <div className="h-14 p-4 text-white break-words">{prev}</div>
      <div className="h-14 p-4 text-white break-words">{curr}</div>
    </div>
  );
}
