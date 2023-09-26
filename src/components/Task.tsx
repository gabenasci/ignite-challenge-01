import { useState } from 'react'
import { Trash } from 'phosphor-react'

import UncheckedIcon from '../assets/unchecked.svg'
import CheckedIcon from '../assets/checked.svg'

import styles from './Task.module.css'

interface TaskProps {
  content: string
  onDeleteTask: (content: string) => void;
}

export function Task({ content, onDeleteTask }: TaskProps) {

  const [completed, setCompleted] = useState(false)

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function handleCheckTask() {
    setCompleted(!completed)
  }

  return (
    <div className={styles.task}>
      { completed ? (<img src={CheckedIcon} onClick={handleCheckTask} />) : (<img src={UncheckedIcon} onClick={handleCheckTask} />) }
      <span><p>First task</p></span>
      <button onClick={handleDeleteTask} title="Delete task">
        <Trash size={20} />
      </button>
    </div>
  )
  
}