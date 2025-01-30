import { configureStore } from "@reduxjs/toolkit";
import reducer from "./todos-slice";

const store = configureStore({ reducer: reducer });

export default store;