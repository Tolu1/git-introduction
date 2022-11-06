import Image from 'next/image'
import styles from '../styles/Team.module.css'

const Tolu = () => {
    return (
        <div className={styles.card}>
            <a href="https://github.com/Tolu1"><Image className={styles.profile} src={'/images/david.jfif'} alt="Avatar" width={100} height={100} /></a>
            <p className={styles.code}>Tolu, a developer who works for Grandida</p>
        </div>
    )
}

export default Tolu