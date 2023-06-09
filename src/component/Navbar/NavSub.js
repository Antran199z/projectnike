import React from "react";
import { Outlet } from "react-router-dom";
import SignIn from "./NavmainComponent/signIn";
import SignUp from "./NavmainComponent/signUp";
import NavTitle from "./NavmainComponent/navTitle/NavTitle";

export default function NavSub() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div>
        <div>
          <NavTitle />
        </div>
        <p onClick={handleOpen}>Sign In</p>
        <SignIn open={open} handleClose={handleClose} />
        <SignUp />
        <Outlet />
      </div>

    </div>
  );
}
