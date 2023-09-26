import styles from './NewTask.module.css'

export function NewTask() {
  return (
    <div className={styles.taskForm}>
      <input type="text" placeholder='Add a new task' />
      <button className={styles.taskCreate}>Create</button>
    </div>
  )
}