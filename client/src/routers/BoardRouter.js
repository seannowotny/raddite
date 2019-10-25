// @flow

import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedBoard, getPosts } from '../actions/boardActions';
import { setRedirect } from '../actions/redirectActions';

const BoardRouter = ({ setSelectedBoard, setRedirect, getPosts, boardState: { boards, selectedBoard }, children }) =>
{
   const { boardName } = useParams();

   useEffect(() => 
   {
      if(boards)
      {
         let board = boards.find(board => board.name.toLowerCase() === boardName.toLowerCase());

         if(board)
         {
            setSelectedBoard(board.id);
         }
         else
         {
            setRedirect('/');
         }
      }
      if(selectedBoard)
      {
         getPosts(selectedBoard.id);
      }
   }, [boards, boardName, setSelectedBoard, setRedirect, selectedBoard, getPosts]);

   return <Fragment>{children}</Fragment>;
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedBoard, setRedirect, getPosts })(BoardRouter);