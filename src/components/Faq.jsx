import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Faq.module.css'

const faqs = [
  {
    q: '한 사이트에 몇 명·몇 마리?',
    a: '사이트당 성인 4명 + 반려동물 2마리까지 입장 가능합니다. 추가 인원은 현장 문의해주세요.',
    open: true,
  },
  {
    q: '결제하면 바로 마감되나요?',
    a: '네. 간편결제 완료 즉시 해당 사이트는 마감되어 다른 사람이 예약할 수 없습니다.',
  },
  {
    q: '어떤 반려동물이 가능한가요? 🐾',
    a: '개·고양이 모두 가능합니다. 단, 입장 조건이 있어요: ① 기초 예방접종 완료 (광견병 필수) ② 외출 시 목줄 착용 의무 ③ 공격성 있는 견종은 입마개 착용 ④ 배변 봉투 지참 필수. 타 반려동물(파충류·조류 등)은 현장 문의 바랍니다.',
  },
  {
    q: '환불 규정',
    a: '행사 30일 전까지 100% 환불 / 14일 전 50% / 7일 전 30% / 그 이후 환불 불가. 천재지변·행사 취소 시 전액 환불됩니다.',
  },
  {
    q: '텐트·장비는 직접 가져와야 하나요?',
    a: '네, 텐트와 캠핑 장비는 개인 지참입니다. 단, 웰컴 키트(조명·배너·미션북)는 현장에서 제공됩니다.',
  },
  {
    q: '미성년자 동반 가능한가요?',
    a: '물론입니다! 아이와 함께하는 가족 단위 참가를 환영합니다. 미성년자는 반드시 보호자 동반이어야 합니다.',
  },
]

export default function Faq() {
  const ref = useScrollReveal()
  return (
    <section id="faq" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="sec-head">
            <div className="eyebrow">Info</div>
            <h2>예약 전 체크 ✔</h2>
          </div>
          <div>
            {faqs.map((item) => (
              <details key={item.q} className={styles.item} open={item.open}>
                <summary className={styles.summary}>{item.q}</summary>
                <div className={styles.ans}>{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
