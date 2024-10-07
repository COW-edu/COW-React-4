import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Todo from "./pages/TodoList.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </Router>
  );
};

export default App;
