import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { ProfileModal } from '../../../context/Modal';
import PostDetails from './PostDetailsInModal';
// import CreatePostForm from './CreatePostForm';

function PostDetailsModal({ post }) {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory()
  const { userId } = useParams()

  const onCloseModal = () => {
    setShowModal(false)
    history.push(`/users/${userId}`)
  }

  const handleClick = () => {
    setShowModal(true)
    history.push(`/users/${userId}/posts/${post.id}`)
  }

  return (
    <div className='profile-post-container'>
      <div className="post-icon-container">
        <i className="fas fa-heart hover-icon"><span>{post?.likes?.length}</span></i>
        <i className="fas fa-comment hover-icon"><span>{post?.comments?.length}</span></i>
      </div>
      <img className='profile-post-img' src={post?.photos[0]?.photo} onClick={handleClick} alt='user-pic'></img>
      {showModal && (
        <ProfileModal onClose={onCloseModal}>
          <PostDetails post={post} onClose={onCloseModal} />
        </ProfileModal>
      )}
    </div>
  );
}
export default PostDetailsModal;
