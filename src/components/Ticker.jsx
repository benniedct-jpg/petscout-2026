import styles from './Ticker.module.css'

export default function Ticker() {
  const text = '★ LIVE BAND ★ CAMPFIRE ★ MISSION PETSCOUT ★ PET FESTIVAL ★   '
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        <span>{text}{text}</span>
      </div>
    </div>
  )
}
