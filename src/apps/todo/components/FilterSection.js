import { useSelector, useDispatch } from "react-redux";
import { updateFilteredValue } from "../redux/todos-slice";


export default function FilterSection() {
  const filteredValue = useSelector((state) => state.filteredValue);
  const dispatch = useDispatch();
  return (
    <select
      className="form-select"
      aria-label="Default select example"
      defaultValue="1"
      value={filteredValue}
      onChange={(e) => dispatch(updateFilteredValue(e.target.value))}
    >
      <option value="default">Default</option>
      <option value="completed-asc">Completed Ascendant</option>
      <option value="completed-desc">Completed Descendant</option>
      <option value="task-asc">Task Ascendant</option>
      <option value="task-desc">Task Descendant</option>
    </select>
  );
}
