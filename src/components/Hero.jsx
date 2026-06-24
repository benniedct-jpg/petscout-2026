import Countdown from './Countdown'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.heroBand}>
      <div className={`wrap ${styles.heroInner}`}>
        <div className={`${styles.sticker} ${styles.st1}`}>댕댕이 동반 🐾</div>
        <div className={`${styles.sticker} ${styles.st2}`}>강원도 고성 🌲</div>
        <div className={styles.tagline}>강원도 숲 속, 우리 강아지와 함께하는 단 한 번의 주말</div>
        <h1 className={styles.h1}>
          펫스카웃<br />캠핑 <span className={styles.accent}>페스티벌</span>
        </h1>
        <div className={styles.when}>
          <span className="pill" style={{ background: '#fff', color: 'var(--ink)' }}>📍 고성 잼버리 캠핑장</span>
          <span className="pill" style={{ background: '#fff', color: 'var(--ink)' }}>📅 2026.09.04–06</span>
          <span className="pill" style={{ background: 'var(--yellow)', color: 'var(--ink)' }}>🏕 350팀 한정</span>
        </div>
        <Countdown />
        <a href="#book" className="btn yellow lg">지금 참여 신청하기 →</a>
      </div>
      <div className={styles.photoRow}>
        <div className={`ph ${styles.photo}`}>CAMP VIBES PHOTO</div>
        <div className={`ph ${styles.photo}`}>LIVE STAGE PHOTO</div>
        <div className={`ph ${styles.photo}`}>DOGS PARTY PHOTO</div>
      </div>
    </div>
  )
}
