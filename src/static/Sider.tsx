import React, { FC, useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface iprops {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sider: FC<iprops> = ({ toggle, setToggle }) => {
  console.log("Reading from sider", toggle);

  return (
    <div className="w-full h-full  p-4">
      <div className="flex justify-between items-center">
        <p>Sider</p>
        <button
          className="p-3 border rounded-md bg-blue-400  justify-between"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "Open" : "Close"}
        </button>
      </div>
    </div>
  );
};

export default Sider;
