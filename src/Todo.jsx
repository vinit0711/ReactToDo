import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@mui/material";
import React, { useState } from "react";
import App from "./App";

import db from "./firebase";

const style = {
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
  const handleClose = () => {
    setOpen(false);
  };
  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <h1>Modal Box</h1>
      </Modal>
      <List>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.text} secondary="🚀"></ListItemText>
        </ListItem>
        <Button onClick={(e) => setOpen(true)}>Edit</Button>
        <Button
          onClick={(event) =>
            console.log(db.collection("todos").doc(props.todo.id))
          }
        >
          ⛔ Delete
        </Button>
      </List>
    </>
  );
}
// db.collection("todos").doc(props.todo.id).delete()
export default Todo;
