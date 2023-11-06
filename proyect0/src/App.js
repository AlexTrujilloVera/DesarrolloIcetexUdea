import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import index from "./Routes/index";
import home from "./Routes/home";
import login from "./Routes/login";
import quiensoy from "./Routes/quiensoy";
import registro from "./Routes/registro";
import carrito from "./Routes/carrito";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="index"Component = {index}></Route>
      <Route path ="home"Component = {home}></Route>
      <Route path ="login"Component = {login}></Route>
      <Route path ="quiensoy"Component = {quiensoy}></Route>
      <Route path ="registro"Component = {registro}></Route>
      <Route path ="carrito"Component = {carrito}></Route>
    </Routes>
    </BrowserRouter>
  );
};
export default App;
