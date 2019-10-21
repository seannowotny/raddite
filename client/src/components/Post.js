// @flow

import React, { useContext, useEffect, Fragment, useState, Button } from 'react';
import Router, { Link } from 'react-router-dom';
import BoardContext from '../context/board/boardContext';
import RedirectContext from '../context/redirect/redirectContext';

function Post(props: any)
{
   const { boards, selectedBoard, SetSelectedPost } = useContext(BoardContext);

   const board = boards.filter(board => board.id === selectedBoard.id)[0];

   const post = board.posts.filter(post => post.id === props.id)[0];

   const redirect = () =>
   {
      console.log(post.title + " POST.TITLE");
      SetSelectedPost(post.title, selectedBoard);
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