import React, { useState } from 'react';
import TodoInput from '../Components/TodoInput';
import TodoList from '../Components/TodoList';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
    setEditingTodo(null);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg p-8 mt-10">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-600">Görev Listesi</h1>
      <TodoInput addTodo={addTodo} editingTodo={editingTodo} updateTodo={updateTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} setEditingTodo={setEditingTodo} />
    </div>
  );
};

export default TodoPage;