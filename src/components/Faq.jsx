import styles from './Faq.module.css'

const faqs = [
  {
    q: '한 사이트에 몇 명·몇 마리?',
    a: '사이트당 인원·반려동물 마릿수 안내가 들어갑니다.',
    open: true,
  },
  {
    q: '결제하면 바로 마감되나요?',
    a: '네. 간편결제 완료 즉시 해당 사이트는 마감되어 다른 사람이 예약할 수 없습니다.',
  },
  {
    q: '어떤 반려동물이 가능?',
    a: '예방접종·목줄 등 기본 규정 안내가 들어갑니다.',
  },
  {
    q: '환불 규정',
    a: '행사일 기준 단계별 환불 규정이 들어갑니다.',
  },
]

export default function Faq() {
  return (
    <section id="faq" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Info</div>
          <h2>예약 전 체크 ✔</h2>
        </div>
        <div className={styles.faq}>
          {faqs.map((item) => (
            <details key={item.q} className={styles.item} open={item.open}>
              <summary className={styles.summary}>{item.q}</summary>
              <div className={styles.ans}>{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
