import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

type Props = {};

const DefaultLayout: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <div className="">
        <div className="fixed top-0 left-0 right-0 -z-0 bg-white/1 shadow-[0_4px_30px_rgba(0,0,0,0.2)] backdrop-blur-[5.9px] border-b border-b-white/20 p-5 px-28">

        <Header />
        </div>
        <div className="z-10 ">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </React.Fragment>
  );
};

export default DefaultLayout;
