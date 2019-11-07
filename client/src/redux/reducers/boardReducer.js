// @flow

import type { BoardAction } from '../actions/boardActions';

type Action = {
   payload: any,
   type: BoardAction | 'persist/REHYDRATE'
};

const initialState = {
   boards: null,
   selectedBoard: null,
   selectedPost: null,
   loading: false,
   boardErrors: null,
};

export default (state: any = initialState, action: Action) =>
{
   switch(action.type)
   {
      case 'persist/REHYDRATE':
      {
         if(action.payload && 
            action.payload.boardState && 
            action.payload.boardState.boards)
         {
            return { 
               ...state,
               boards: action.payload.boardState.boards
            }
         }
         else
         {
            return { ...state }
         }
      }
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
         return result;
      }
      case 'ADD_BOARD':
      {
         let boards = state.boards;
         boards.push(action.payload);
         const result = {
            ...state,
            boards,
            loading: false
         };
         return result;
      }
      case 'SET_SELECTED_BOARD':
      {
         // console.log(action.payload);
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
               boardErrors: "Something went wrong"
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
         return result;
      }
      case 'ADD_POST':
      {
         let selectedBoard = state.selectedBoard;
         
         selectedBoard.posts.push(action.payload);

         const result = {
            ...state,
            selectedBoard,
            loading: false
         };
         return result;
      }
      case 'ADD_COMMENT':
      {
         const commentToBeAdded = action.payload;
         // console.log(commentToBeAdded);

         const selectedPost = state.selectedPost;
         
         if(commentToBeAdded.commentId)
         {
            let commentBeingRepliedTo = customFilter(selectedPost, commentToBeAdded.commentId);
            
            commentBeingRepliedTo && commentBeingRepliedTo.comments.push(commentToBeAdded);
         }
         else
         {
            selectedPost.comments.push(commentToBeAdded);
         }

         const result = {
            ...state,
            selectedPost,
            loading: false
         };
         return result;
      }
      case 'SET_LOADING':
         return {
            ...state,
            loading: true
         };
      case 'CLEAR_ERRORS':
      {
         return {
            ...state,
            boardErrors: null,
         }
      }
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
};

function customFilter(object: any, id: number)
{
   let result = null;

   if(object['content'] && object['id'] == id)
       return object;

   if(object['comments'])
   {
      const comments = object['comments'];

      for (let i = 0; i < comments.length; i++) 
      {
         const comment = comments[i];
         // console.log(comment, id);

         result = customFilter(comment, id);

         if(result)
            return result;
      }
   }
}