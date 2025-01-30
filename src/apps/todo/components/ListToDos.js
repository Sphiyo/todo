import { Button, Form, InputGroup } from "react-bootstrap";
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
    <ul className="d-flex flex-column align-items-stretch gap-2">
      {filteredtoDos &&
        filteredtoDos.map((item) => (
          <li
            key={item.id}
            className="d-flex align-items-center justify-content-between "
          >
            <div className="d-flex align-items-center gap-2">
              <InputGroup>
                <Form.Check
                  type="checkbox"
                  label={item.task} 
                  checked={item.completed}
                  onChange={() => dispatch(completedToggle(item.id))}
                />
              </InputGroup>
            </div>
            <div className="d-flex align-items-centre">
              <Button
                variant="outline-info"
                className="rounded-right-0 border-end-0 py-0"
                onClick={() => console.log("ListToDos ul li button edit")}
              >
                Edit{" "}
              </Button>
              <div className="border border-secondary"></div>
              <Button
                variant="outline-danger"
                className="rounded-left-0 border-start-0 py-0"
                onClick={() => console.log("ListToDos ul li button delete")}
              >
                {" "}
                Delete{" "}
              </Button>
            </div>
          </li>
        ))}
    </ul>
  );
}
