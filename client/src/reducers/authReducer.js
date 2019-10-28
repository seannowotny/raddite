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
      case 'LOGIN':
      {
         const result = {
            ...state,
            authenticatedAs: action.payload.user,
            token: action.payload.access_token
         };
         return result;
      }
      case 'AUTH_ERROR':
      {
         return {
            ...state,
            error: action.payload.errors
         };
      }
      case 'GET_PERSISTED_AUTH_STATE':
      {
         const state = localStorage.getItem('state');
         let authState = null;
         if(state)
         {
            authState = state.authState;
         }
         return { state: authState };
      }
      default:
         return {
            ...state
         };
   }
};