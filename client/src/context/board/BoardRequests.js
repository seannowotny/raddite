// @flow

import axios from 'axios';
import Board from './Board';

export default class BoardRequests
{
   constructor(dispatch: any)
   {
      this.dispatch = dispatch;
   }

   dispatch: any;

   GetBoards = async (): Promise<any> =>
   {
      try
      {
         const response = await axios.get('/api/boards');

         this.dispatch({ boards: response.data });
      }
      catch(error)
      {
         this.dispatch({ errors: error.response.errors });
      }
   }

   AddBoard = async (board: Board): Promise<any>  =>
   {
      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      };

      try
      {
         const response = await axios.post('/api/boards', board, config);

         this.dispatch({ boards: response.data });
      }
      catch(error)
      {
         this.dispatch({ errors: error.response.errors });
      }
   }
}