
import FilterSection from "./FilterSection";
import ListToDos from "./ListToDos";

export default function ToDosListWrapper() {
  return (
    <div className="border rounded-bottom-2 rounded-bottom-right-0 w-75 p-2">
      <FilterSection />
      <ListToDos />
    </div>
  );
}
