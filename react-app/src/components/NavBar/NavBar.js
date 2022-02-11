import React from "react";
import { NavLink } from "react-router-dom";

// import LogoutButton from "../Auth/LogoutButton";
import CreatePostModal from "../Post/CreatePost";
import "./NavBar.css";
import logo from "../../images/Inspogram.jpg";
// import cat from "../../images/cat.jpg";
import ProfileButton from "./ProfileButton";

const NavBar = ({ user }) => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-bar">
          <div className="left-bar">
            <NavLink to="/feed" exact={true} activeClassName="active">
              <img className="logo" src={logo} alt="logo" />
              {/* <p className='logo'>Inspogram</p> */}
            </NavLink>
          </div>

          <div className="right-bar">
            <NavLink to="/feed" exact={true} activeClassName="active">
              <i className="fa-solid fa-house"></i>
            </NavLink>
            <i className="fa-brands fa-facebook-messenger"></i>
            <CreatePostModal />
            <i className="fa-regular fa-compass"></i>
            <i className="fa-regular fa-heart"></i>
            {/* <NavLink to={`/users/${user.id}`} activeClassName="active">
              <img className="profile-pic-nav" src={cat} alt="cat" />
            </NavLink> */}
            {/* <LogoutButton /> */}
            <ProfileButton user={user} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
