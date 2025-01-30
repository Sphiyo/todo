import "bootstrap/dist/css/bootstrap.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import ToDo from "./pages/ToDo";

export default function AppToDo() {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
}
