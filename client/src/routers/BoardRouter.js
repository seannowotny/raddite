// @flow

import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedBoard } from '../actions/boardActions';
import { setRedirect } from '../actions/redirectActions';

const BoardRouter = ({ setSelectedBoard, setRedirect, boardState: { boards }, children }) =>
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
      console.log('BoardRouter');
   }, [boards, boardName, setSelectedBoard, setRedirect]);

   return <Fragment>{children}</Fragment>;
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedBoard, setRedirect })(BoardRouter);