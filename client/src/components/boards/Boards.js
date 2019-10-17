// @flow
import React, { useContext, useEffect, Fragment } from 'react';
import BoardContext from '../../context/board/boardContext';

const Boards = () => 
{
   const boardContext = useContext(BoardContext);

   const { boards, getBoards } = boardContext;

   useEffect(() => {
      if(boards.length === 0)
      {
         getBoards();
      }
   }, []);

   return (
      <Fragment>
      {boards.length > 0 ? 
      boards.map(board => (
            <option key={board.id} value={board.name}></option>)
      ):<Fragment/>}
      </Fragment>
   );
}

export default Boards;