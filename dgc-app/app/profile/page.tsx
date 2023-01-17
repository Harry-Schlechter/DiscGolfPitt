import styles from '../../styles/Home.module.css'

export default function Page({ userid }: { userid: string }) {
  return (
    <>
      <main className={styles.main}>
        <h1>Hello user #{userid}!</h1>
      </main>
    </>
  )
}
