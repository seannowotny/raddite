import React from 'react'

const ErrorAlert = ({error}) => {
   return (
      <div id="alert" class="alert alert-danger alert-dismissible mt-4 mb-0 fade show" onMouseDown={(e) => e.preventDefault()} role="alert">             
         {error}
         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
         </button>
      </div>
   )
}

export default ErrorAlert
