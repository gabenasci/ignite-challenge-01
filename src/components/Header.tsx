import styles from './Header.module.css'
import Logo from '../assets/todo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt='ToDo Logo' />
    </header>
  )
}