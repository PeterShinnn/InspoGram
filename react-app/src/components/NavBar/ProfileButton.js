import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import LogoutButton from "../Auth/LogoutButton";
import cat from "../../images/cat.jpg";

function ProfileButton({ user }) {
const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <div className="profile-btn-container">
      <img className="profile-pic-nav" src={sessionUser?.profile_image_url ? sessionUser?.profile_image_url : cat } alt="cat" onClick={openMenu} />
      {showMenu && (
        <div className="profile-pic-dropdown">
          <div className="profile">
            <NavLink to={`/users/${user.id}`} activeClassName="active">
              <button>
                <i className="fa-regular fa-user"></i>Profile
              </button>
            </NavLink>
          </div>
          <div className="logout">
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
