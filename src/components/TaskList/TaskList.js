import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";

export const TaskList = () => {
  // const tasks = useSelector(getTodos);
  return (
    <ul className={css.list}>
      {[].map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
