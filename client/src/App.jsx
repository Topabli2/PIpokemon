import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Landing from "./components/landing/Landing";
import FormCreate from "./components/formCreate/FormCreate.jsx";
import Detail from "./components/detail/Detail.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/create" && location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<FormCreate />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
