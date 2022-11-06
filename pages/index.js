import Head from 'next/head'
import Image from 'next/image'
import Chris from '../comps/Chris'
import Kingsley from '../comps/Kingsley'
import Ruth from '../comps/Ruth'
import Timmy from '../comps/Timmy'
import Tolu from '../comps/Tolu'
import styles from '../styles/Team.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FutureX</title>
        <meta name="description" content="FutureX Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://github.com/The-FutureX" className={styles.code}>FutureX, The Team✔️</a>
        </h1>

        <div className={styles.monitorframe}>
          <div className={styles.monitor}> 
            <div className={styles.grid}>
              <Tolu />
              <Chris />
              <Kingsley />
              <Ruth />
              <Timmy />
            </div>
          </div>
        </div>
        <div className={styles.neck}>
        </div>
        <div className={styles.tail}>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
