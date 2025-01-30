import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { completedToggle } from "../redux/todos-slice";

export default function ListToDos() {
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state.toDos);
  const filteredValue = useSelector((state) => state.filteredValue);
  let filteredtoDos = null;
  if (toDos.length > 0) {
    switch (filteredValue) {
      case "default":
        filteredtoDos = toDos;
        break;
      case "completed-asc":
        filteredtoDos = toDos.toSorted((a, b) => a.completed - b.completed);
        break;
      case "completed-desc":
        filteredtoDos = toDos.toSorted((a, b) => b.completed - a.completed);
        break;
      case "task-asc":
        filteredtoDos = toDos.toSorted((a, b) => a.task.localeCompare(b.task));
        break;
      case "task-desc":
        filteredtoDos = toDos.toSorted((a, b) => b.task.localeCompare(a.task));
        break;
      default:
        throw Error("select field has an unexpected value");
    }
  }
  return (
    <ul>
      {filteredtoDos && filteredtoDos.map((item) => (
        <li key={item.id}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => dispatch(completedToggle(item.id))}
          />
          <label>{item.task}</label>
          <Button
            variant="outline-info"
            onClick={() => console.log("ListToDos ul li button edit")}
          >
            {" "}
            Edit{" "}
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => console.log("ListToDos ul li button delete")}
          >
            {" "}
            Delete{" "}
          </Button>
        </li>
      ))
      }
    </ul>
  );
}
