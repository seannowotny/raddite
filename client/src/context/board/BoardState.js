// @flow
import React, { useReducer, Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import BoardRequests from '../../requests/BoardRequests';
import PostRequests from '../../requests/PostRequests';
import reducer from '../reducer';
import BoardContext from './boardContext';

const BoardState = (props: any) =>
{
   const initialState = {
      errors: null,
      boards: null,
      selectedBoard: null,
      redirect: null
   };

   const[state, dispatch] = useReducer(reducer, initialState);

   const boardRequests = new BoardRequests(dispatch);
   const postRequests = new PostRequests(dispatch);

   const setCurrentBoard = async (boardName: string) =>
   {
      console.log(boardName);
      console.log(state.boards);
      let selectedBoard = state.boards.filter(
         board => board.name.toLowerCase() === boardName.toLowerCase()
      );

      if(selectedBoard.length > 0)
      {
         selectedBoard = selectedBoard[0];

         dispatch(
         { 
            selectedBoard,
            redirect: '/' + selectedBoard.name
         });

         !selectedBoard.posts && fillPosts(selectedBoard.id);
      }
      else
      {
         dispatch(
         { 
            selectedBoard: null,
            redirect: '/'
         });
      }
   }

   const fillPosts = async (boardId: int) =>
   {
      const boards = state.boards;
      boards.filter(board => board.id === boardId)[0].posts = await postRequests.FetchPosts(boardId);

      dispatch({ boards: boards });
   }

   const fillBoards = async () =>
   {
      const boards = await boardRequests.FetchBoards();
      dispatch({ boards });
   }

   useEffect(() => {
      if(! state.boards)
      {
         fillBoards();
      }
   }, []);

   return (
      <Fragment>
         <BoardContext.Provider
            value={{ 
               errors: state.errors,
               boards: state.boards,
               selectedBoard: state.selectedBoard,
               setCurrentBoard
            }}>
            { props.children }
         </BoardContext.Provider>
         {state.redirect && <Redirect to={state.redirect}/>}
      </Fragment>
   )
}

export default BoardState;