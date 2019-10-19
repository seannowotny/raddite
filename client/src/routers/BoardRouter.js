// @flow

import React, { Fragment, useContext, useEffect, useState } from 'react';
import BoardContext from '../context/board/boardContext';
import Home from '../components/pages/Home';
import Board from '../components/pages/Board';
import { BrowserRouter as Route, Switch, useParams, Redirect } from 'react-router-dom';

const BoardRouter = (props: any) =>
{
   const { boardName } = useParams();

   const { setCurrentBoard, selectedBoardId, boards, domain } = useContext(BoardContext);

   const [result, setResult] = useState(<Fragment><h1>Loading Board...</h1></Fragment>);

   useEffect(() => 
   {
      if(domain !== 'HOME' && ! selectedBoardId && boards.length > 0)
      {
         setCurrentBoard(boardName);
      }
      else if(selectedBoardId)
      {
         setResult(
            <Board />
         );
      }
   }, [boards, selectedBoardId]);

   useEffect(() =>
   {
      if(selectedBoardId)
      {
         setResult(
            <Board />
         );
      }
   }, [selectedBoardId]);

   return result;
}

export default BoardRouter;