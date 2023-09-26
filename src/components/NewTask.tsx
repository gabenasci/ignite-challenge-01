import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './NewTask.module.css'

interface NewTaskProps {
  onCreateTask: (taskText: string) => void
}

export function NewTask({ onCreateTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()
    onCreateTask(newTaskText)
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }
  return (
    <form onSubmit={handleCreateTask} className={styles.taskForm}>
      <input 
        type="text" 
        placeholder='Add a new task' 
        value={newTaskText}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button type='submit' className={styles.taskCreate}>Create</button>
    </form>
  )
}