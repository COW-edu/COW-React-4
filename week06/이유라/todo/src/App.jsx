import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./pages/TodoList.jsx";

const App = () => {
  return (
    <div className="max-w-full mx-auto p-4 text-center">
      <div className="w-full h-screen text-black">
        <Router>
          <Routes>
            <Route path="/" element={<Todo />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
