// @flow

export default class PostStateMethods
{
   constructor(state: object, dispatch: any, setAdditiveRedirect: any)
   {
      this.state = state;
      this.dispatch = dispatch;
      this.setAdditiveRedirect = setAdditiveRedirect;
   }

   SetSelectedPost = (postTitle) =>
   {
      let selectedPost = this.state.selectedBoard.posts.filter(
         post => post.title.toLowerCase() === postTitle.toLowerCase()
      );

      if(selectedPost.length > 0)
      {
         selectedPost = selectedPost[0];

         this.dispatch({ selectedPost });
         this.setAdditiveRedirect(postTitle);

         // !selectedPost.comments && fillComments(selectedPost.id);
      }
      else
      {
         this.dispatch({ selectedPost: null });
      }
   }
}