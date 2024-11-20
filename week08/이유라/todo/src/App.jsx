import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import TodoList from "./pages/TodoList";
import Register from "./pages/Register";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div className="max-w-full mx-auto p-4 text-center">
      <div className="w-full h-screen text-black">
        <Router>
          <Routes>
            <Route
              path="/auth"
              element={
                !isAuth ? <Login setIsAuth={setIsAuth} /> : <Navigate to="/" />
              }
            ></Route>

            <Route
              path="/register"
              element={!isAuth ? <Register /> : <Navigate to="/" />}
            />
            <Route
              path="/"
              element={
                isAuth ? (
                  <TodoList setIsAuth={setIsAuth} />
                ) : (
                  <Navigate to="/auth" />
                )
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
