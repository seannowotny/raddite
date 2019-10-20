// @flow

import React, { useContext, useEffect, Fragment, useState, Button } from 'react';
import Router, { Link } from 'react-router-dom';
import BoardContext from '../context/board/boardContext';
import PostContext from '../context/post/postContext';
import RedirectContext from '../context/redirect/redirectContext';

function Post(props: any)
{
   const { boards, selectedBoard } = useContext(BoardContext);
   const { setSelectedPost } = useContext(PostContext);

   const board = boards.filter(board => board.id === selectedBoard.id)[0];

   const post = board.posts.filter(post => post.id === props.id)[0];

   const redirect = () =>
   {
      console.log(post.title + " POST.TITLE");
      setSelectedPost(post.title);
   }

   return (
      <Fragment>
         <div className="text-center">
            <button className="btn btn-secondary mt-3 mb-2" onClick={redirect}><h3>{post.title}</h3></button>
         </div>
         <p>{post.body}</p>
      </Fragment>
   );
}

export default Post;