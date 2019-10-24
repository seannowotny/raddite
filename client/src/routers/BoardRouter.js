// @flow

import React, { Fragment, useContext, useEffect } from 'react';
import BoardContext from '../context/board/boardContext';
import { BrowserRouter as useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSelectedBoard } from '../actions/boardActions';

const BoardRouter = ({ setSelectedBoard, boards, children }) =>
{
   const { boardName } = useParams();

   useEffect(() => 
   {
      if(boards)
      {
         setSelectedBoard(boardName);
      }
   }, [boards, boardName, setSelectedBoard]);

   return <Fragment>{children}</Fragment>;
}

const mapStateToProps = state => ({
   boards: state.boards,
});

export default connect(mapStateToProps, { setSelectedBoard })(BoardRouter);