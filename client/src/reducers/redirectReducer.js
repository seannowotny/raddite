// @flow

import type { RedirectAction } from '../actions/redirectActions';

type Action = {
   type: RedirectAction,
   payload: any
};

const initialState = {
   redirect: null,
   history: []
};

export default (state: any = initialState, action: Action) =>
{
   switch(action.type)
   {
      case 'SET_REDIRECT':
      {
         const history = state.history;
         history.push(action.payload);
         // console.log(history);
         return {
            ...state,
            redirect: action.payload,
            history
         };
      }
      case 'SET_ADDITIVE_REDIRECT':
      {
         const redirect = state.redirect + action.payload;
         const history = state.history;
         history.push(redirect);
         // console.log(history);
         return {
            ...state,
            redirect,
            history
         }
      }
      case 'GO_BACK':
      {
         let history = state.history;
         let redirect = null;
         if(state.history.length > 1)  //FOR BETTER HISTORY SAVE REACT HISTORY IN LOCALSTORAGE
         {
            history.pop();
            redirect = history[history.length-1];
         }
         else
         {
            action.payload();
         }
         // console.log(history);
         return {
            ...state,
            redirect,
            history
         }
      }
      default:
         return {
            ...state
         };
   }
};