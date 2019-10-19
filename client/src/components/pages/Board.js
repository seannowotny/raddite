// @flow

import React, { useContext, useEffect, Fragment, useState } from 'react';
import Router, { useParams, Redirect } from 'react-router-dom';
import BoardContext from '../../context/board/boardContext';

const Board = (props: any) =>
{
   const { boards, selectedBoardId, setCurrentBoard, redirect } = useContext(BoardContext);

   const boardId = props.boardId;

   return (
      <Fragment>
         <h1>Board</h1>
         <h1>{selectedBoardId}</h1>
         <h1>{props.boardName}</h1>
      </Fragment>
   );
}

export default Board;