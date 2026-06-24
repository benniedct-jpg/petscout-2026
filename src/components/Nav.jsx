import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.nav}>
      <div className={`wrap ${styles.navIn}`}>
        <a className={styles.logo} href="#top">
          <span className={`lat ${styles.paw}`}>PS</span>
          펫스카웃 캠핑
        </a>
        <nav className={styles.links}>
          <a href="#value">왜?</a>
          <a href="#lineup">라인업</a>
          <a href="#program">프로그램</a>
          <a href="#book">신청</a>
          <a href="#faq">안내</a>
        </nav>
        <a href="#book" className={`btn yellow ${styles.cta}`}>참여 신청 🐾</a>
      </div>
    </header>
  )
}
