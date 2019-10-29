// @flow

import type { BoardAction } from '../actions/boardActions';
import Persister from '../helpers/Persister';

type Action = {
   payload: any,
   type: BoardAction
};

const initialState = {
   boards: null,
   selectedBoard: null,
   selectedPost: null,
   loading: false,
   error: null,
};

const persister = new Persister('boardState');
const { persist } = persister;

export default (state: any = initialState, action: Action) =>
{
   switch(action.type)
   {
      case 'GET_BOARDS':
      {
         const { selectedBoard, selectedPost } = updateSelected(state);

         const result = {
            ...state,
            boards: action.payload,
            selectedBoard,
            selectedPost,
            loading: false
         };
         persist(result);
         return result;
      }
      case 'ADD_BOARD':
      {
         const result = {
            ...state,
            boards: action.payload,
            loading: false
         };
         persist(result);
         return result;
      }
      case 'SET_SELECTED_BOARD':
         {
         return {
            ...state,
            selectedBoard: state.boards.find(board => board.id === action.payload),
            loading: false
         };
      }
      case 'SET_SELECTED_POST':
      {
         let result = null;

         if(state.selectedBoard)
         {
            result = {
               ...state,
               selectedPost: state.selectedBoard.posts.find(post => post.id === action.payload),
               loading: false
            };
         }
         else
         {
            result = {
               ...state,
               error: "SELECTED_BOARD HASN'T BEEN SET, ABORTING"
            };
         }

         return result;
      }    
      case 'GET_POSTS':
      {
         let selectedBoard = state.selectedBoard;
         selectedBoard.posts = action.payload;

         const result = {
            ...state,
            selectedBoard,
            loading: false
         };
         persist(result);
         return result;
      }
      case 'SET_LOADING':
         return {
            ...state,
            loading: true
         };
      default:
      {
         return {
            ...state
         };
      }
   }
}

const updateSelected = (state: any) =>
{
   const selectedBoard = state.selectedBoard && state.board.find(board => board.id === state.selectedBoard.id);
   const selectedPost = state.selectedPost && selectedBoard.posts.find(post => post.id === state.selectedPost.id);

   return { selectedBoard, selectedPost };
}