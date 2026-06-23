import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Program.module.css'

const days = [
  {
    day: 'DAY 1', date: '9.04', color: 'coral',
    items: [
      { time: '15:00', label: '입소 · 키트 지급' },
      { time: '18:30', label: '웰컴 인디 라이브' },
      { time: '21:00', label: '캠프파이어 🔥' },
    ],
  },
  {
    day: 'DAY 2', date: '9.05', color: 'blue',
    items: [
      { time: '10:00', label: '반려동물 축제 OPEN' },
      { time: '14:00', label: '미션 펫스카웃 🏅' },
      { time: '19:30', label: '헤드라이너 무대' },
    ],
  },
  {
    day: 'DAY 3', date: '9.06', color: 'ink',
    items: [
      { time: '09:00', label: '아침 산책 클래스' },
      { time: '11:00', label: '배지 수여식' },
      { time: '12:00', label: '철수 · 굿즈 증정' },
    ],
  },
]

export default function Program() {
  const ref = useScrollReveal()
  return (
    <section id="program">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="sec-head">
            <div className="eyebrow">3-Day Schedule</div>
            <h2>도착하면 쉴 틈이 없어요.</h2>
          </div>
          <div className={styles.timeline}>
            {days.map((d) => (
              <div key={d.day} className={styles.tcard}>
                <div className={`${styles.h} ${styles[d.color]}`}>
                  <span>{d.day}</span>
                  <span className="lat" style={{ fontSize: 22 }}>{d.date}</span>
                </div>
                <ul className={styles.list}>
                  {d.items.map((item) => (
                    <li key={item.time} className={styles.item}>
                      <b className={`lat ${styles.time}`}>{item.time}</b>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
