import React from 'react';

const TodoList = ({ todos, deleteTodo, toggleComplete, setEditingTodo }) => {
  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
          <span onClick={() => toggleComplete(todo.id)} className={`flex-1 cursor-pointer font-medium ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
            {todo.text}
          </span>
          <div className="flex gap-3">
            <button onClick={() => setEditingTodo(todo)} className="text-blue-500 hover:text-blue-700 font-semibold">Düzenle</button>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700 font-semibold">Sil</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;