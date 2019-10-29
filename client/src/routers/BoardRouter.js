// @flow

import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedBoard, getPosts } from '../actions/boardActions';
import { setRedirect } from '../actions/historyActions';
import history from '../helpers/history';

const BoardRouter = ({ setSelectedBoard, setRedirect, getPosts, boardState: { boards, selectedBoard, loading }, children }) =>
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
            history.push('/');
         }
      }
      if(selectedBoard)
      {
         getPosts(selectedBoard.id);
      }
      //eslint-disable-next-line
   }, [boards, selectedBoard]);

   return (
   <Fragment>
      {loading 
      ? <Fragment></Fragment>
      : <Fragment>{children}</Fragment>}
   </Fragment>
   );
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedBoard, setRedirect, getPosts })(BoardRouter);