import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    console.log(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
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
        <input
          id="username"
          type="text"
          onChange={addNameChangeHandler}
          value={enteredName}
        />

        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={addAgeChangeHandler}
          value={enteredAge}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
