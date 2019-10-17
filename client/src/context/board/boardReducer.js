// @flow

export default (state: any, newState: any) =>
{
   return { 
      ...state,
      ...newState
   };
}