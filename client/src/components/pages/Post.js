// @flow

import React, { useContext, useEffect, Fragment, useState } from 'react';
import BoardContext from '../../context/board/boardContext';

function Board(props: any)
{
   const { selectedBoard } = useContext(BoardContext);

   return (
      <Fragment>
         <h1>Board</h1>
         <h1>{selectedBoard.selectedPost.title}</h1>
         <p>{selectedBoard.selectedPost.body}</p>
      </Fragment>
   );
}

export default Board;