import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import TodoList from './components/Todo/TodoList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todos" element={<TodoList />} />
        {/* 기본 경로를 /auth로 리디렉션 */}
        <Route path="/" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
