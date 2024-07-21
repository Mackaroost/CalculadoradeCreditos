import React from "react";

export const Button = ({ signo, calculo }) => {
  return (
    <div>
      <button
        type="button"
        className=" h-10 w-10 rounded-full flex justify-center bg-sky-500  items-center text-2xl text-white font-bold hover:bg-sky-700 "
        onClick={calculo}
      >
        {signo}
      </button>
    </div>
  );
};
