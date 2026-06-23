import styles from './FinalCta.module.css'

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className="wrap">
        <h2 className={styles.h2}>올 여름,<br />최고의 주말 🐾</h2>
        <p>자리는 350개뿐. 우리 강아지의 첫 페스티벌을 놓치지 마세요.</p>
        <a href="#book" className="btn ink lg">지금 예약하기 →</a>
      </div>
    </section>
  )
}
