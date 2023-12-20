import React from "react";
import { NavLink } from "react-router-dom";
import { getToken } from "../utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authThunk";

const Header = () => {
  const { token, userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/post">Post</NavLink>

      {!token ? (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/registration">Registration</NavLink>
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
