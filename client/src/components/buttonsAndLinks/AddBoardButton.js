// @flow

import * as React from 'react'
import { connect } from 'react-redux';
import { addBoard } from '../../redux/actions/boardActions';

function AddBoardButton ({ authState: { authenticatedAs, token }, addBoard, input }): React.Node
{
   const handleClick = e =>
   {
      e.preventDefault();

      addBoard({
         name: input
      }, token);
   }

   return (
      <>
      {authenticatedAs && 
         <button className="nav-link nav-item active" onClick={handleClick}>Add</button>
      }
      </>
   )
}

const mapStateToProps = (state: any) => (
{
   authState: state.authState,
   boardState: state.boardState,
})

export default connect(mapStateToProps, { addBoard })(AddBoardButton)