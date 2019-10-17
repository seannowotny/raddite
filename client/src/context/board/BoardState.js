// @flow
import React, { useReducer } from 'react';
import BoardRequests from './BoardRequests';
import boardReducer from './boardReducer';
import BoardContext from './boardContext';

const BoardState = (props: any) =>
{
   const initialState = {
      boards: [],
      errors: []
   };

   const[state, dispatch] = useReducer(boardReducer, initialState);

   const boardRequest = new BoardRequests(dispatch);

   const getBoards = boardRequest.GetBoards;
   const addBoard = boardRequest.AddBoard;

   return (
      <BoardContext.Provider
         value={{ 
            errors: state.errors,
            boards: state.boards,
            getBoards,
            addBoard
          }}>
          { props.children }
      </BoardContext.Provider>
   )
}

export default BoardState;