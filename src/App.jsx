import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AuthWrapper from "./Pages/AuthWrapper";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./Pages/PrivateRoute";

function App() {
  return (
    <AuthWrapper>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AuthWrapper>
  );
}

export default App;
