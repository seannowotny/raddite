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
         return {
            ...state,
            authenticatedAs: action.payload.user,
            token: action.payload.access_token
         };
      }
      case 'AUTH_ERROR':
      {
         return {
            ...state,
            error: action.payload.errors
         };
      }
      case 'SET_STATE':
      {
         const { authenticatedAs, token } = action.payload;
         return {
            authenticatedAs,
            token
         };
      }
      default:
         return {
            ...state
         };
   }
};