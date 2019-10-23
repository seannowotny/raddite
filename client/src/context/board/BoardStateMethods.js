// @flow

import React, { useContext } from 'react';
import RedirectContext from '../redirect/redirectContext';

export default class BoardStateMethods
{
   constructor(state: object, dispatch: any, boardRequests: any, postRequests: any)
   {
      this.state = state;
      this.dispatch = dispatch;
      this.boardRequests = boardRequests;
      this.postRequests = postRequests;
   }

   setRedirect = useContext(RedirectContext).setRedirect;

   SetSelectedBoard = async (boardName: string) =>
   {
      let selectedBoard = this.state.boards.find(
         board => board.name.toLowerCase() === boardName.toLowerCase()
      );

      if(selectedBoard)
      {
         this.dispatch({ selectedBoard });
         this.setRedirect(selectedBoard.name);

         if(! selectedBoard.posts)
         {
            selectedBoard.posts = await this.postRequests.FetchPosts(selectedBoard.id);
            this.dispatch({ selectedBoard });
         }
      }
      else
      {
         this.dispatch({ selectedBoard: null });
         this.setRedirect('');
      }
   }

   UpdateSelectedBoard = (selectedBoard: any) =>
   {
      this.dispatch({ selectedBoard });
   }

   FillBoards = async () =>
   {
      const boards = await this.boardRequests.FetchBoards();
      this.dispatch({ boards });
   }
}