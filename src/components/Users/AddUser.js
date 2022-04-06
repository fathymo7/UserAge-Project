import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredName, enteredAge);
  };

  const addNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const addAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" onChange={addNameChangeHandler} />

        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={addAgeChangeHandler} />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
