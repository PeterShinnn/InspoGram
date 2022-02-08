import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProtectedRoute from '../Auth/ProtectedRoute';
import GetUserPosts from '../Post/GetUserPosts/GetUserPosts';
import './UserProfile.css'


function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <main>
      <ul>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
      </ul>
        <GetUserPosts />
    </main>
  );
}
export default User;
