import styles from './Ticker.module.css'

export default function Ticker() {
  const text = '★ 강원도 고성 🌲 ★ LIVE BAND ★ CAMPFIRE 🔥 ★ MISSION PETSCOUT 🏅 ★ PET FESTIVAL 🐾 ★ 설레는 2박3일 ★   '
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        <span>{text}{text}</span>
      </div>
    </div>
  )
}
