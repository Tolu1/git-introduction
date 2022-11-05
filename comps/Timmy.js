import Image from 'next/image'
import styles from '../styles/Team.module.css'

const Timmy = () => {
    return (
        <div className={styles.card}>
            <Image className={styles.profile} src={'/images/avatar.png'} alt="Avatar" width={100} height={100} />
            <h2>Timmy</h2> 
            <p>A developer who works for Grandida</p>
        </div>
    )
}

export default Timmy