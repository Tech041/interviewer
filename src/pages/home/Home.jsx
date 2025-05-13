import React from "react";
import SideBar from "../../components/SideBar";
import MainBar from "../../components/MainBar";

const Home = () => {
  return (
    <div className="  h-[99%] w-[99%]  flex gap-2">
      <div className=" flex-1 lg:flex-[3] flex-shrink-0 ">
        <MainBar />
      </div>
      <div className="hidden lg:block flex-1 flex-shrink-0 ">
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
