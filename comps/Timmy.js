import Image from 'next/image'
import styles from '../styles/Team.module.css'

const Timmy = () => {
    return (
        <div className={styles.card}>
            <a href="https://github.com/Timilehin-bello"><Image className={styles.profile} src={'/images/imma-degen.png'} alt="Avatar" width={100} height={100} /></a>
            <p className={styles.code}>Timmy, a developer who works for Grandida</p>
        </div>
    )
}

export default Timmy