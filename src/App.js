import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import RectangleProgress from './components/RectangleProgress';

function App() {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };



  return (
    <div>
      <header>
        <h1>My Todo List</h1>
      </header>
      <main>
        <AddTodo onAdd={addTodo} />

        <div className="flex flex-col items-end p-3 h-16">
          <div className="h-full w-4/5">
            <div className="h-full w-full">
              <RectangleProgress
                maxRectangles={15}
                content={(() => {
                  const dates = [];
                  const today = new Date();
                  for (let i = 0; i <= 14; i++) {
                    const date = new Date(today);
                    date.setDate(date.getDate() + i);
                    dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
                  }
                  return dates;
                })()}
                completedColor="#28a745"
                pendingColor="#e9ecef"
              />
            </div>
          </div>
          
        </div>

        <TodoList 
          todos={todos} 
          onToggle={toggleTodo}
        />
      </main>
    </div>
  );
}

export default App;
