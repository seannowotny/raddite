import * as React from 'react';

const ErrorAlert = ({ error, callback }): React.Node =>
{
   return (
      <div id="alert" className="alert alert-danger alert-dismissible mt-4 mb-0 fade show" onMouseDown={(e) => { e.preventDefault(); callback(); }} role="alert">             
         {error}
         <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
         </button>
      </div>
   )
}

export default ErrorAlert
