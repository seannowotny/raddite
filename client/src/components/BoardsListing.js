// @flow

import * as React from 'react';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSelectedBoard, getBoards } from '../redux/actions/boardActions';
import { setRedirect } from '../redux/actions/historyActions';
import history from '../helpers/history';

const BoardsListing = ({ boardState: { boards }, setSelectedBoard, getBoards, setRedirect, input, setInput }): React.Node => 
{
   const handleInputChange = (event: any) =>
   {
      const value = event.target.value;
      setInput(value);
      setInput(value);

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
         <input value={input} type="text" id="boardInput" list="boardDatalist" onChange={handleInputChange}/>
         <datalist id="boardDatalist">
            <Fragment>
            {boards &&
               boards.map(board => (
                  <option key={board.id} value={board.name}></option>))
            }
            </Fragment>
         </datalist>
      </Fragment>
   );
};

const mapStateToProps = state => ({
   boardState: state.boardState
});

export default connect(mapStateToProps, { setSelectedBoard, getBoards, setRedirect })(BoardsListing);