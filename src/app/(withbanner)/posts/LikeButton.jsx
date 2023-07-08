"use client";
import { useState } from "react";
const LikeButton = ({ id }) => {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    alert("Me gusta paps");
  };
  return (
    <button
      onClick={() => setLiked(!liked)}
      className="bg-teal-600 hover:bg-teal-700 focus:bg-teal-800 text-xs p-1 px-4 rounded-lg my-1"
      id={id}
    >
      {liked ? "🤍" : "🖤"}
    </button>
  );
};

export default LikeButton;
