// @flow

import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedBoard } from '../actions/boardActions';

const BoardRouter = ({ setSelectedBoard, boardState: { boards }, children }) =>
{
   const { boardName } = useParams();

   useEffect(() => 
   {
      if(boards)
      {
         let board = boards.find(board => board.name.toLowerCase() === boardName.toLowerCase());

         board && setSelectedBoard(board.id);
      }
   }, [boards, boardName, setSelectedBoard]);

   return <Fragment>{children}</Fragment>;
}

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedBoard })(BoardRouter);