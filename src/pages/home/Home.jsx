import React from "react";
import MainBar from "../../components/mainBar";
import SideBar from "../../components/sideBar";

const Home = () => {
  return (
    <div className="  h-[99%] w-[99%]  flex gap-2">
      <div className="flex-[3] flex-shrink-0 ">
        <MainBar />
      </div>
      <div className="flex-1 flex-shrink-0 ">
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
