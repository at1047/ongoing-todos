import React from 'react';
import RectangleProgress from './RectangleProgress';

const TodoItem = ({ todo, onToggle }) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  return (
    <div className="flex items-center gap-4 p-3">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <div>
          <div className={todo.completed ? 'line-through text-gray-500' : ''}>
            {todo.text}
          </div>
          <div className="text-sm text-gray-500">
            Created: {formatDate(todo.createdAt)}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-4/5 h-16">
        <div className="h-full w-full">
          <RectangleProgress
            completed={todo.completed ? 1 : 0}
            total={1}
            maxRectangles={15}
            completedColor="#28a745"
            pendingColor="#e9ecef"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
