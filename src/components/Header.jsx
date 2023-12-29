import React from "react";
import { NavLink } from "react-router-dom";
import { getToken } from "../utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authThunk";

import './Header.css';
import LoginModal from "./LoginModal/LoginModal";

const Header = () => {
  const { token, userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/post">Post</NavLink>

      {!token ? (
        <>
          {/* <NavLink to="/login">Login</NavLink>
          <NavLink to="/registration">Registration</NavLink> */}
          <LoginModal/>
          {/* <button>Login/SignUp</button> */}
        </>
      ) : (
        <>
          Welcome, {userData.name}! 
          <button onClick={logoutHandler}> Logout</button>
        </>
      )}
    </div>
  );
};

export default Header;
