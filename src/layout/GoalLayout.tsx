import React from "react";
import Sider from "../static/Sider";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const GoalLayout = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  console.log(toggle);

  return (
    <div className="">
      <div
        className={`fixed w-[${toggle ? "200px" : "50px"}] h-screen border-r ${
          toggle ? "bg-slate-100" : "bg-red-100"
        } duration-1000 transition-all`}
      >
        <Sider toggle={toggle} setToggle={setToggle} />
      </div>
      <div className=" w-full h-[200vh] flex justify-end">
        <div className=" w-[calc(100vw-250px)] p-2 border rounded-md m-2 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GoalLayout;
