import React from "react";
import { ListItem, InputCheckbox, InputText, Btn } from "../../atoms";

const TodoTask = ({
  textInputValue,
  checkBoxValue,
  onChangeValue,
  onCheck,
  onDelete,
}) => {
  return (
    <ListItem>
      <InputText onChange={onChangeValue} value={textInputValue} />
      <InputCheckbox onChange={onCheck} checked={checkBoxValue} />
      <Btn text="X" onClick={onDelete}></Btn>
    </ListItem>
  );
};

export default TodoTask;