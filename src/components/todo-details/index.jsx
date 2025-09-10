import React, { Fragment } from 'react'
import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'

const TodoDetails = ({tododetails,opendailog,setopendailog}) => {
  return (
    <Fragment>
      <Dialog onClose={() => setopendailog(false)} open={opendailog}>
        <DialogTitle>
          {tododetails?.todo}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setopendailog(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default TodoDetails
