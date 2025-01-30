import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../redux/todos-slice";
import { useState } from "react";
import { v4 as genId } from "uuid";

export default function ToDosEdit() {
  const [currentTask, setCurrentTask] = useState({
    id: genId,
    task: "",
    complete: false,
  });
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-column border p-2 rounded-bottom-2 rounded-bottom-left-0 w-25 gap-2">
      <div>
        Add a Task
        <Form.Control
          type="text"
          placeholder="Enter your Task"
          value={currentTask.task}
          onChange={(e) =>
            setCurrentTask((val) => ({ ...val, task: e.target.value }))
          }
        />
        <Button
          variant="primary"
          className="w-100 py-0"
          onClick={() => currentTask.task && dispatch(add(currentTask))}
        >
          Add to list
        </Button>
      </div>
      <div>
        <Button variant="dark" className="w-100 py-0" onClick={()=>
    dispatch()}>
          Mark all as complete
        </Button>
        <Button variant="dark" className="w-100 py-0">
          Mark all as incomplete
        </Button>
        <Button variant="dark" className="w-100 py-0">
          Load saved tasks
        </Button>
        <Button variant="dark" className="w-100 py-0">
          Save tasks
        </Button>
        <Button variant="dark" className="w-100 py-0">
          Remove all items
        </Button>
      </div>
    </div>
  );
}
