import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";

const ProtectedRouteComponent = ({ admin }) => {
  // let auth = false;

  if (admin) {
    let adminAuth = true;
    // if (adminAuth) auth = true;
    return adminAuth? <Outlet/>:<Navigate to={'/login'}/>

  } else {
    let userAuth = true;
    // if (userAuth) auth = true;
return userAuth ?<><Outlet/><UserChatComponent/></>:<Navigate to={'/login'}/>

  }
  // return auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRouteComponent;
