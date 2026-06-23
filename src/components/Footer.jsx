import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div>
          <div className={styles.lg}>2026 코리아 펫스카웃 &amp; 캠핑 페스티벌</div>
          <div>고성 잼버리 캠핑장 · 2026.09.04–06</div>
          <div style={{ marginTop: 10 }}>주최 · 강원도반려동물협회</div>
        </div>
        <div className={styles.links}>
          예약 안내 · 자주 묻는 질문 · 오시는 길<br />
          문의 033-000-0000 · info@petscout.kr
        </div>
      </div>
    </footer>
  )
}
