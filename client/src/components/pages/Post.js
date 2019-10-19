// @flow

import React, { useContext, useEffect, Fragment, useState } from 'react';
import BoardContext from '../../context/board/boardContext';

function Post(props: any)
{
   const { boards, selectedBoardId } = useContext(BoardContext);

   const board = boards.filter(board => board.id === selectedBoardId)[0];

   const post = board.posts.filter(post => post.id === props.id)[0];

   return (
      <Fragment>
         <h1>{post.title}</h1>
         <p>{post.body}</p>
      </Fragment>
   );
}

export default Post;