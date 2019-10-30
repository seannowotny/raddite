// @flow

import type { AuthAction } from '../actions/authActions';

type Action = {
   type: AuthAction,
   payload: any
};

const initialState = {
   authenticatedAs: null,
   token: null,
   error: null
};

export default (state: any = initialState, action: Action) =>
{
   switch(action.type)
   {
      case 'persist/REHYDRATE':
      {
         if(action.payload && action.payload.authState)
         {
            return { 
               ...action.payload.authState,
               error: state.error
            }
         }
         else
         {
            return { ...state }
         }
      }
      case 'REGISTER':
      {
         const result = {
            ...state,
            authenticatedAs: action.payload.user,
            token: action.payload.access_token,
         }
         return result;
      }
      case 'LOGIN':
      {
         const result = {
            ...state,
            authenticatedAs: action.payload.user,
            token: action.payload.access_token
         };
         return result;
      }
      case 'LOGOUT':
      {
         return {
            ...state,
            authenticatedAs: null,
            token: null,
         };
      }
      case 'AUTH_ERROR':
      {
         return {
            ...state,
            error: action.payload.errors
         };
      }
      default:
         return {
            ...state
         };
   }
};