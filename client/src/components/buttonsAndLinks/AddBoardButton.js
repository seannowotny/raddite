// @flow

import * as React from 'react'
import { connect } from 'react-redux';
import { addBoard, setSelectedBoard } from '../../redux/actions/boardActions';
import history from '../../helpers/history';
import '../../App.css';

function AddBoardButton ({ authState: { authenticatedAs, token }, boardState: { boards }, addBoard, setSelectedBoard, input }): React.Node
{
   const handleClick = async e =>
   {
      e.preventDefault();

      await addBoard({
         name: input
      }, token);
      // console.log(boards.length);
      await setSelectedBoard(boards.length + 1);
      history.push('/' + input);
   }

   return (
      <button type="button" className="btn btn-primary btn-sm mb-2 mr-3" onClick={handleClick}>Add</button>
   )
}

const mapStateToProps = (state: any) => (
{
   authState: state.authState,
   boardState: state.boardState,
})

export default connect(mapStateToProps, { addBoard, setSelectedBoard })(AddBoardButton)