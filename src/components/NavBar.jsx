import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField'
import storeLikeDislike from '../store/storeLikeDislike';
import Toast from '../components/Toast'
import Stack from '@mui/material/Stack';
import {useState} from 'react'

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [title, setTitle] = React.useState("")
  const [body, setBody] = React.useState("")
  const [image, setImage] = React.useState("")

  const addArticle = storeLikeDislike((state) => state.addNewPost)

  const [toast, setToast] = useState({open: false, message: "", severity: "success"})

  const showToast = (message, severity = "success") => {
      setToast({open: true, message, severity})
  }

  <Toast 
  open={toast.open}
  message={toast.message}
  severity={toast.severity}
  onClose={() => setToast({...toast, open: false})} />

  const handleSubmit = () => {
    addArticle({
      title,
      body,
      image,
      likes: 0,
      dislike: 0,
      personal: true,
    })

    if(!title.trim()) return 

    setTitle("")
    setBody("")
    setImage("")

    showToast("Article Created!", "success")

    handleClose()
  }

  return (
    <Box sx={{}}>
      <AppBar position="static">
        <Toolbar sx={{
          display:"flex",
          justifyContent:"space-between",
        }}>
          <Button variant='contained' color='primary' component={Link} to="/">Home</Button>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              color='primary'
              variant='contained'
            >
              Create An article
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  'aria-labelledby': 'basic-button',
                },
              }}
            >
              <MenuItem><TextField id="titleInput" label="Article title" variant="outlined" size='small' value={title} onChange={(e) => setTitle(e.target.value)}/></MenuItem>
              <MenuItem><TextField id="bodyInput" label="Article body" variant="outlined" size='small' value={body} onChange={(e) => setBody(e.target.value)}/></MenuItem>
              <MenuItem><TextField id="imageInput" label="Article image" variant="outlined" size='small' value={image} onChange={(e) => setImage(e.target.value)}/></MenuItem>
              <MenuItem><Button variant='contained' color='primary' fullWidth onClick={handleSubmit}>Submit</Button></MenuItem>
            </Menu>
          </div>
          <Button variant='contained' color='primary' component={Link} to="/myArticles">My Articles</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}