import Image from 'next/image'
import styles from '../styles/Team.module.css'

const Kingsley = () => {
    return (
        <div className={styles.card}>
            <a href="https://github.com/KingsleyOnoh38"><Image className={styles.profile} src={'/images/meebits.png'} alt="Avatar" width={100} height={100} /></a>
            <p className={styles.code}>Kingsley, a developer who works for Grandida</p>
        </div>
    )
}

export default Kingsley