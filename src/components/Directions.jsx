import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Directions.module.css'

const routes = [
  { icon: '🚗', method: '자가용', desc: '서울 → 속초 방면 고속도로 → 고성IC 하차 → 잼버리 캠핑장 (약 3시간)' },
  { icon: '🚌', method: '고속버스', desc: '동서울터미널 → 속초 (2시간 30분) → 속초시외버스터미널 → 택시 30분' },
  { icon: '🚂', method: 'KTX + 버스', desc: '서울역 → KTX 강릉 → 강릉버스터미널 → 속초·고성 방면 버스' },
]

export default function Directions() {
  const ref = useScrollReveal()
  return (
    <section id="directions">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="sec-head">
            <div className="eyebrow">Location</div>
            <h2>오시는 길 📍</h2>
          </div>
          <div className={styles.inner}>
            <div className={styles.mapBox}>
              <div className={`ph ${styles.map}`}>
                지도 이미지<br />고성 잼버리 캠핑장<br />강원도 고성군
              </div>
              <div className={styles.address}>
                <b>고성 잼버리 캠핑장</b><br />
                강원도 고성군 토성면 청간리<br />
                <a href="https://map.naver.com" target="_blank" rel="noreferrer" className={styles.mapLink}>
                  네이버 지도로 보기 →
                </a>
              </div>
            </div>
            <div className={styles.routes}>
              {routes.map((r) => (
                <div key={r.method} className={styles.route}>
                  <span className={styles.icon}>{r.icon}</span>
                  <div>
                    <div className={`lat ${styles.method}`}>{r.method}</div>
                    <div className={styles.desc}>{r.desc}</div>
                  </div>
                </div>
              ))}
              <div className={`${styles.route} ${styles.parking}`}>
                <span className={styles.icon}>🅿️</span>
                <div>
                  <div className={`lat ${styles.method}`}>주차</div>
                  <div className={styles.desc}>캠핑장 내 무료 주차 가능. 사이트 바로 앞까지 차량 진입 허용.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
