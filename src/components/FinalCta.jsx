import styles from './FinalCta.module.css'

export default function FinalCta() {
  return (
    <section className={styles.final}>
      <div className="wrap">
        <h2 className={styles.h2}>강원도의 밤,<br />우리 강아지와 🐾</h2>
        <p>한정 350팀. 강원도 고성에서 강아지와 함께한 그 주말,<br />평생 기억에 남을 거예요.</p>
        <a href="#book" className="btn ink lg">지금 참여 신청하기 →</a>
      </div>
    </section>
  )
}
