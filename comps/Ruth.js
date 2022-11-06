import Image from 'next/image'
import styles from '../styles/Team.module.css'

const Ruth = () => {
    return (
        <div className={styles.card}>
            <a href="https://github.com/RuthO1"><Image className={styles.profile} src={'/images/deadfellaz.png'} alt="Avatar" width={100} height={100} /></a>
            <p className={styles.code}>Ruth, a developer who works for Grandida</p>
        </div>
    )
}

export default Ruth