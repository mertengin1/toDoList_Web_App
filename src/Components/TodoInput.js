import React, { useState, useEffect } from 'react';

const TodoInput = ({ addTodo, editingTodo, updateTodo }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (editingTodo) setValue(editingTodo.text);
    else setValue('');
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    if (editingTodo) updateTodo(editingTodo.id, value);
    else addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input type="text" className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-blue-500 outline-none transition" placeholder="Yeni görev ekle..." value={value} onChange={(e) => setValue(e.target.value)} />
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
        {editingTodo ? 'Güncelle' : 'Ekle'}
      </button>
    </form>
  );
};

export default TodoInput;