import Countdown from './Countdown'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.heroBand}>
      <div className={`wrap ${styles.heroInner}`}>
        <div className={`${styles.sticker} ${styles.st1}`}>댕댕이 동반 🐾</div>
        <div className={`${styles.sticker} ${styles.st2}`}>2박3일 NON-STOP</div>
        <div className={styles.tagline}>우리 강아지가 기다려온 단 한 번의 주말</div>
        <h1 className={styles.h1}>
          펫스카웃<br />캠핑 <span className={styles.accent}>페스티벌</span>
        </h1>
        <div className={styles.when}>
          <span className="pill" style={{ background: '#fff', color: 'var(--ink)' }}>📍 고성 잼버리 캠핑장</span>
          <span className="pill" style={{ background: '#fff', color: 'var(--ink)' }}>📅 2026.09.04–06</span>
          <span className="pill" style={{ background: '#fff', color: 'var(--ink)' }}>🎪 350 사이트</span>
        </div>
        <Countdown />
        <a href="#book" className="btn yellow lg" style={{ marginTop: 32 }}>내 사이트 예약하기 →</a>
      </div>
      <div className={styles.photoRow}>
        <div className={`ph ${styles.photo}`}>CAMP VIBES PHOTO</div>
        <div className={`ph ${styles.photo}`}>LIVE STAGE PHOTO</div>
        <div className={`ph ${styles.photo}`}>DOGS PARTY PHOTO</div>
      </div>
    </div>
  )
}
