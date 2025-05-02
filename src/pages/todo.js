import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase/firebase';
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from '../component/Navbar';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);

  // Check user login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch todos in real-time
  useEffect(() => {
    if (!user) return;
    const todosRef = collection(db, 'users', user.uid, 'todos');
    const unsubscribe = onSnapshot(todosRef, (snapshot) => {
      const todoList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTodos(todoList);
    });
    return () => unsubscribe();
  }, [user]);

  // Add todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    await addDoc(collection(db, 'users', user.uid, 'todos'), {
      text: input.trim()
    });

    setInput('');
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'users', user.uid, 'todos', id));
  };

  if (!user) return <p className="text-center mt-10">Please log in to use the to-do app.</p>;

  return (
    <>
    <Navbar />
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold text-center mb-4">Your Todo List</h2>

      <form onSubmit={addTodo} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-3 py-2 border rounded-md focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add</button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:underline">Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default TodoApp;
