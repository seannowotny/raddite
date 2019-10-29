// @flow

import history from '../../helpers/history';

export default class BoardStateMethods
{
   constructor(state: object, dispatch: any, boardRequests: any, postRequests: any)
   {
      this.state = state;
      this.dispatch = dispatch;
      this.boardRequests = boardRequests;
      this.postRequests = postRequests;
   }

   SetSelectedBoard = async (boardName: string) =>
   {
      let selectedBoard = this.state.boards.find(
         board => board.name.toLowerCase() === boardName.toLowerCase()
      );

      if(selectedBoard)
      {
         this.dispatch({ selectedBoard });
         history.push(selectedBoard.name);

         if(! selectedBoard.posts)
         {
            selectedBoard.posts = await this.postRequests.FetchPosts(selectedBoard.id);
            this.dispatch({ selectedBoard });
         }
      }
      else
      {
         this.dispatch({ selectedBoard: null });
         history.push('/');
      }
   }
   
   FillBoards = async () =>
   {
      const boards = await this.boardRequests.FetchBoards();
      this.dispatch({ boards });
   }
}