import * as React from 'react';
import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

export default function Toast({open, message, severity, onClose}) {
  return (<>
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
    </>
  );
}