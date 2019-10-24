// @flow

import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSelectedBoard, getBoards } from '../../actions/boardActions';

const BoardsListing = ({ boards, setSelectedBoard, getBoards }) => 
{
   const [boardInput, setBoardInput] = useState('');

   const handleInputChange = (event: any) =>
   {
      const value = event.target.value;
      setBoardInput(value);

      setSelectedBoard(value);
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
            {boards && boards.length > 0 
            ?  boards.map(board => (
                  <option key={board.id} value={board.name}></option>)
            ): <Fragment/>}
         </datalist>
      </Fragment>
   );
};

const mapStateToProps = state => ({
   boards: state.boards
});

export default connect(mapStateToProps, { setSelectedBoard, getBoards })(BoardsListing);