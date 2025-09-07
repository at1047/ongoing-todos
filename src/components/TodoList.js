import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle }) => {
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div>
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;