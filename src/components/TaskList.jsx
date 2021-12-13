import React from 'react';
import { Task } from '../'

export const TaskList = ({ tasks, setTasks }) => {
  // Taskの状態を切り替える
  const handleCheckBox = (
    e,
    l
  ) => {
    const newTasks = tasks.map((task, i) => {
      return i === i ? { ...task, isDone: e.target.checked} : task;
    });
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={'todo-${index}'}>
          {task.isDone ? <s>{task.label}</s> : task.label}
          <input
            onChange={(e) => handleCheckBox(e, index)}
            type='checkbox'
            checked={task.isDone}
            />
        </li>
      ))}
    </ul>
  );
};
