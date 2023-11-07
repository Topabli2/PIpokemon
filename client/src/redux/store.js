import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //esta linea es para conectarnos con la extension del navegador(redux devtools)

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;

//applyMiddleware y thunkMiddleware son middlewars para comunicarnos con el server y traer info
//basicamente gracias a eso podemos hacer peticiones a nuestro server
