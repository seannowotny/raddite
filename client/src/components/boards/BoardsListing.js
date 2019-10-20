// @flow
import React, { useContext, useEffect, Fragment, useState } from 'react';
import BoardContext from '../../context/board/boardContext';

const BoardsListing = () => 
{
   const { boards, setCurrentBoard } = useContext(BoardContext);

   const [boardInput, setBoardInput] = useState('');

   const handleInputChange = (event: any) =>
   {
      const value = event.target.value;
      setBoardInput(value);

      setCurrentBoard(value);
   }

   return (
      <Fragment>
         <input value={boardInput} type="text" id="boardInput" list="boardDatalist" onChange={handleInputChange}/>
         <datalist id="boardDatalist">
            {boards ? 
            boards.map(board => (
                  <option key={board.id} value={board.name}></option>)
            ):<Fragment/>}
         </datalist>
      </Fragment>
   );
}

export default BoardsListing;