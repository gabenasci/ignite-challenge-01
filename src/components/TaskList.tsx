import { Task } from './Task'
import styles from './TaskList.module.css'

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <header>
        <div className={styles.created}>
          <p>Created tasks</p>
          <span className={styles.badge}>5</span>
        </div>
        <div className={styles.completed}>
          <p>Completed tasks</p>
          <span className={styles.badge}>2 of 5</span>
        </div>
      </header>
      <Task /> 
      <Task />  
    </div>
  )
}