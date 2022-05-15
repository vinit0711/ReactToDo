import { Button, FormControl, Input, InputLabel } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import Todo from "./Todo";
import firebase from "firebase";

// import "./index.css";

import db from "./firebase";

const App = () => {
  const [todos, SetTodos] = useState([]);

  const [input, SetInput] = useState("");

  const inputEvent = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    SetInput(e.target.value);
  };

  const addToDo = (e) => {
    // SetTodos([...todos, input]);
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    SetInput(""); // Clp the input
  };

  useEffect(() => {
    console.log("Use efffect called , db is changed ");
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        SetTodos(
          snapshot.docs.map((doc) => ({ todo: doc.data().todo, id: doc.id }))
        );
      });
  }, []);
  return (
    <>
      <div className="container">
        <h1>Welcome to task Planner</h1>
        <div className="container">
          <div className="App">
            <FormControl onSubmit={inputEvent}>
              <InputLabel>Wite Todo</InputLabel>
              <Input type="text" value={input} onChange={inputEvent} />
              <br />
              <Button
                type="submit"
                onClick={addToDo}
                variant="contained"
                color="success"
                disabled={!input}
              >
                Add To Do
              </Button>
            </FormControl>
            <ul>
              {/* {console.log(todos)} */}
              {todos.map((todo) => (
                <Todo todo={todo} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
