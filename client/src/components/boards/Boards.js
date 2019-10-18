// @flow
import React, { useContext, useEffect, Fragment, useState } from 'react';
import BoardContext from '../../context/board/boardContext';

const Boards = () => 
{
   const boardContext = useContext(BoardContext);

   const { boards, fillBoards, setCurrentBoard } = boardContext;

   useEffect(() => {
      if(boards.length === 0)
      {
         fillBoards();
      }
   }, []);

   const [boardInput, setBoardInput] = useState('');

   const handleChange = (event: any) =>
   {
      const value = event.target.value;
      setBoardInput(value);

      setCurrentBoard(value);
   }

   return (
      <Fragment>
         <input value={boardInput} type="text" id="boardInput" list="boardDatalist" onChange={handleChange}/>
         <datalist id="boardDatalist">
            {boards.length > 0 ? 
            boards.map(board => (
                  <option key={board.id} value={board.name}></option>)
            ):<Fragment/>}
         </datalist>
      </Fragment>
   );
}

export default Boards;