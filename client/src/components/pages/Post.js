// @flow

import React, { useContext, useEffect, Fragment, useState } from 'react';
import PostContext from '../../context/post/postContext';

function Post(props: any)
{
   const { selectedPost } = useContext(PostContext);

   return (
      <Fragment>
         <h1>Post</h1>
         <h1>{selectedPost.title}</h1>
         <p>{selectedPost.body}</p>
      </Fragment>
   );
}

export default Post;