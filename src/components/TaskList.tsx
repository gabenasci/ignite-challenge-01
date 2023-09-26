import { useState } from 'react'
import { Task } from './Task'

import Clipboard  from '../assets/clipboard.svg'

import styles from './TaskList.module.css'


export function TaskList() {
  const [tasks, setTasks] = useState([
    {
      content: "Brush teeth",
      completed: false
    },
    {
      content: "Floss",
      completed: false
    },
    {
      content: "Wash face",
      completed: true
    },
  ])

  function completeTask(taskToComplete: string) {
    const updatedTasks = tasks.map((task) =>
      task.content === taskToComplete ? { ...task, completed: (!task.completed) } : task
    );
    setTasks(updatedTasks)
  }

  function deleteTask(taskToDelete: string) {
    const updatedTasks = tasks.filter(task => 
      (task.content !== taskToDelete)
    )
    setTasks(updatedTasks)
  }

  return (
    <div className={styles.taskList}>
      <header>
        <div className={styles.created}>
          <p>Created tasks</p>
          <span className={styles.badge}>{tasks.length}</span>
        </div>
        <div className={styles.completed}>
          <p>Completed tasks</p>
          <span className={styles.badge}>{tasks.filter(task => task.completed ).length} of {tasks.length}</span>
        </div>
      </header>
        {tasks.length === 0 ? (
          <div className={styles.noTasks}>
            <img src={Clipboard} alt='' />
            <h3>You don't have any tasks</h3>
            <p>Create tasks and organize your to-do list</p>
          </div>
        ) : (
          tasks.map(task => (
            <Task 
              onDeleteTask={deleteTask}
              content={task.content}
              onCompleteTask={completeTask}
              completedProp={task.completed}
              key={task.content} 
            />
          )))
        }
    </div>
  )
}