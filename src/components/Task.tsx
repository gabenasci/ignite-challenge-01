import { useState } from 'react'
import { Trash } from 'phosphor-react'

import UncheckedIcon from '../assets/unchecked.svg'
import CheckedIcon from '../assets/checked.svg'

import styles from './Task.module.css'

export interface TaskProps {
  content: string
  onCompleteTask: (content: string) => void
  onDeleteTask: (content: string) => void
  completedProp: boolean
}

export function Task({ content, onCompleteTask, onDeleteTask, completedProp }: TaskProps) {

  const [completed, setCompleted] = useState(completedProp)

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function handleCheckTask() {
    onCompleteTask(content)
    setCompleted(!completed)
  }

  return (
    <div className={styles.task}>
      { completed ? (<img src={CheckedIcon} onClick={handleCheckTask} />) : (<img src={UncheckedIcon} onClick={handleCheckTask} />) }
      <span className={completed ? styles.completed : ''}><p>{content}</p></span>
      <button onClick={handleDeleteTask} title="Delete task">
        <Trash size={20} />
      </button>
    </div>
  )
  
}