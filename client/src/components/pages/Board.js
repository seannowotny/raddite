// @flow

import React, { useContext, useEffect, Fragment, useState } from 'react';
import Router, { useParams, Redirect } from 'react-router-dom';
import Post from './Post';
import BoardContext from '../../context/board/boardContext';

const Board = (props: any) =>
{
   const { boards, selectedBoardId } = useContext(BoardContext);

   const board = boards.filter(board => board.id === selectedBoardId)[0];

   return (
      <Fragment>
         <h1>{board && board.name}</h1>
         <Fragment>
            {board && board.posts ? board.posts.map(post => <Post key={post.id} id={post.id} />) : <h1>Loading Posts...</h1>}
         </Fragment>
      </Fragment>
   );
}

export default Board;