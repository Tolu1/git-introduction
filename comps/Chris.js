import Image from 'next/image'
import styles from '../styles/Team.module.css'

const Chris = () => {
    return (
        <div className={styles.card}>
            {/* <Image className={styles.profile} src={'/images/avatar.png'} alt="Avatar" width={100} height={100} /> */}
            <a href="https://github.com/suruabiye"><Image className={styles.profile} src={'/images/bored-ape.webp'} alt="Avatar" width={100} height={100} /></a>
            <p className={styles.code}>Chris, a developer who works for Grandida</p>
        </div>
    )
}

export default Chris