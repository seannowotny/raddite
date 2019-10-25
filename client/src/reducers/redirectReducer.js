// @flow

import type { RedirectAction } from '../actions/redirectActions';

type Action = {
   type: RedirectAction,
   payload: any
};

const initialState = {
   redirect: null
};

export default (state: any = initialState, action: Action) =>
{
   switch(action.type)
   {
      case 'SET_REDIRECT':
         return {
            ...state,
            redirect: action.payload
         };
      case 'SET_ADDITIVE_REDIRECT':
      {
         const redirect = state.redirect + action.payload;
         return {
            ...state,
            redirect
         }
      }
      default:
         return {
            ...state
         };
   }
};