// @flow

import React, { useEffect, Fragment, useState } from 'react';
import Router, { useParams, Redirect } from 'react-router-dom';
import Post from '../Post';
import { connect } from 'react-redux';

const Board = ({ board: { boards, selectedBoard } }) =>
{
   let board = null
   if(selectedBoard && boards)
   {
      board = boards.filter(board => board.id === selectedBoard.id)[0];
   }

   return (
      <Fragment>
         <h1>{board && board.name}</h1>
         <Fragment>
            {board && board.posts ? board.posts.map(post => <Post key={post.id} id={post.id} />) : <h1>Loading Posts...</h1>}
         </Fragment>
      </Fragment>
   );
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, null)(Board);