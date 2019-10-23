// @flow

import React, { Fragment, useContext, useEffect } from 'react';
import BoardContext from '../context/board/boardContext';
import { BrowserRouter as useParams } from 'react-router-dom';

const BoardRouter = (props: any) =>
{
   const { boardName } = useParams();

   const boardContext = useContext(BoardContext);
   const { SetSelectedBoard, boards } = boardContext;

   useEffect(() => 
   {
      if(boards)
      {
         SetSelectedBoard(boardName);
      }
   }, [boards, boardName, SetSelectedBoard]);

   return <Fragment>{props.children}</Fragment>;
}

export default BoardRouter;