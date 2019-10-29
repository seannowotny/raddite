// @flow

import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSelectedBoard, getBoards } from '../../actions/boardActions';
import { setRedirect } from '../../actions/historyActions';
import history from '../../helpers/history';

const BoardsListing = ({ boardState: { boards }, setSelectedBoard, getBoards, setRedirect }) => 
{
   const [boardInput, setBoardInput] = useState('');

   const handleInputChange = (event: any) =>
   {
      const value = event.target.value;
      setBoardInput(value);

      const board = boards.find(board => board.name.toLowerCase() === value.toLowerCase());

      if(board)
      {
         setSelectedBoard(board.id);
         history.push('/' + board.name);
      }
   }

   useEffect(() =>
   {
      if(! boards)
      { 
         getBoards();
      }   
   }, [boards, getBoards])

   return (
      <Fragment>
         <input value={boardInput} type="text" id="boardInput" list="boardDatalist" onChange={handleInputChange}/>
         <datalist id="boardDatalist">
            {boards
            ?  boards.map(board => (
                  <option key={board.id} value={board.name}></option>)
            ): <Fragment/>}
         </datalist>
      </Fragment>
   );
};

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedBoard, getBoards, setRedirect })(BoardsListing);