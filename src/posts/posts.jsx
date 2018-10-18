import React from 'react';
import '../styles/posts.css';

const Post = (props) => (
  <div className='card post-body'>
    <div className='card-body'>
      { props.postBody }
    </div>
  </div>
)

export default Post;
