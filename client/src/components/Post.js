// @flow

import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setSelectedBoard } from '../actions/boardActions';

function Post({ boards, selectedBoard, SetSelectedPost, id })
{
   const board = boards.filter(board => board.id === selectedBoard.id)[0];

   const post = board.posts.filter(post => post.id === id)[0];

   const redirect = () =>
   {
      console.log(post.title + " POST.TITLE");
      SetSelectedPost(post.title, selectedBoard);
   }

   return (
      <Fragment>
         <h1>Post</h1>
         <div className="text-center">
            <button className="btn btn-secondary mt-3 mb-2" onClick={redirect}><h3>{post.title}</h3></button>
         </div>
         <p>{post.body}</p>
      </Fragment>
   );
}

const mapStateToProps = state => ({
   boards: state.boards,
   selectedBoard: state.selectedBoard
});

export default connect(mapStateToProps, { setSelectedBoard })(Post);