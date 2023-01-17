import styles from '../styles/Home.module.css'
import Login from './Login'

export default function Page() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Hello from the home page!</h1>
        <Login />
      </div>
    </main>
  )
}
