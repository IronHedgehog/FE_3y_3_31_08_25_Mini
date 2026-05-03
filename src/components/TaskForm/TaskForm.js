import { Button } from "../Button/Button";
import css from "./TaskForm.module.css";
// import { addToDo } from "../../redux/todos/todosSlice";
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/todos/todosSlice";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.text.value;
    dispatch(addToDo(inputValue));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
