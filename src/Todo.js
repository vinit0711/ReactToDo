import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal, Box, Input
} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React, { useState } from "react";
import App from "./App";
import "./index.css"
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import db from "./firebase";

const useStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, SetInput] = useState("");

  const style = useStyles;
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {

    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, { merge: true })
    setOpen(false);
  }
  // console.log("{console.log(todos)}==", props)
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            UPDATE
          </Typography>
          <Input placeholder={props.todo.todo} type="text" value={input} onChange={e => SetInput(e.target.value)} />
          <Button onClick={updateTodo}>Update Todo</Button>
        </Box>
      </Modal>
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>

          <ListItemText primary={props.todo.todo} secondary="🚀"></ListItemText>
        </ListItem>
        <Button onClick={(e) => setOpen(true)}>Edit</Button>
        <DeleteForeverIcon
          onClick={
            (event) => db.collection("todos").doc(props.todo.id).delete()} />
      </List>
    </>
  );
}
// db.collection("todos").doc(props.todo.id).delete()
export default Todo;
