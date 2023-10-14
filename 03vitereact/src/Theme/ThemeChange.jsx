import React, { useState } from "react";

function ThemeChange() {
  const [color, setColor] = useState("red");
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full h-screen duration-200"
    >
      <div className="fixed flex flex-wrap inset-x-0 justify-center pt-7">
        <div className=" rounded-xl px-4 py-2 mx-4 flex justify-center shadow-lg gap-4 bg-white">
          <button
            style={{ backgroundColor: "red" }}
            className=" rounded-xl outline-none px-4 py-1 text-white shadow-lg"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
            className=" rounded-xl outline-none px-4 py-1 text-white shadow-lg"
          >
            Green
          </button>
          <button
            style={{ backgroundColor: "yellow" }}
            className=" rounded-xl outline-none px-4 py-1 text-white shadow-lg"
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
          <button
            style={{ backgroundColor: "black" }}
            className=" rounded-xl outline-none px-4 py-1 text-white shadow-lg"
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThemeChange;
