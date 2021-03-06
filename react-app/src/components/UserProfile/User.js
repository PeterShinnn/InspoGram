import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import GetUserPosts from './GetUserPosts/GetUserPosts';
//import ProtectedRoute from '../Auth/ProtectedRoute';
import UserProfileHeader from './UserProfileHeader';
import { getAllPost } from '../../store/post';
import './UserProfile.css'



function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const dispatch = useDispatch()

  const posts = useSelector(state => state.userPostsReducer);
  const postsList = Object.values(posts)
  
  useEffect(() => {
    const payload = {
      user_id: userId
    }
    dispatch(getAllPost(payload));
}, [dispatch, userId]);

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
      <div className='all-container'>
        <UserProfileHeader postsList={postsList} user={user} />
        <div className='profile-section-border'>&nbsp;</div>
        <GetUserPosts />
      </div>
    </main>
  );
}
export default User;
