import { Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
