import "./ToDo.css";
import { useDispatch, useSelector } from "react-redux";
import ToDosEdit from "../components/ToDosEdit";
import Header from "../components/Header";
import ToDosListWrapper from "../components/ToDosListWrapper";
import { useEffect } from "react";
import { set } from "../redux/todos-slice";

export default function ToDo() {
  // const toDos = useSelector(state=>state.toDos);
  const dispatch = useDispatch();
  async function getData() {
    const res = await fetch("http://localhost:8000/toDos");
    const data = await res.json();
    dispatch(set(data))
  }
  useEffect(() => {
    getData();
  }, []);
  // useEffect(()=>{
  //   if(toDos.length>0){
  //     fetch("http://localhost:8000/toDos/", {
  //       method: "PUT",
  //       body: JSON.stringify(toDos),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     });
  //   }
  // }, [toDos]);
  return (
    <div className="d-flex flex-column p-4">
      <Header />
      <div className="d-flex">
        <ToDosListWrapper />
        <ToDosEdit />
      </div>
    </div>
  );
}
