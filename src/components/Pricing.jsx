import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Pricing.module.css'

const items = [
  { label: '2박 3일 캠핑 사이트',       price: '₩120,000', note: '1사이트 기준' },
  { label: '인디밴드 공연 2회',           price: '₩40,000',  note: '1인 기준' },
  { label: '반려동물 축제 입장',          price: '₩15,000',  note: '인+반려동물' },
  { label: '미션 펫스카웃 + 배지 키트',  price: '₩20,000',  note: '1팀 기준' },
  { label: '캠프파이어 & 웰컴 키트',     price: '₩15,000',  note: '포함' },
  { label: '굿즈 증정',                   price: '₩12,000',  note: '포함' },
]

const TOTAL_IF_SEPARATE = 222000
const OUR_PRICE = 220000

export default function Pricing() {
  const ref = useScrollReveal()
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="eyebrow">Price breakdown</div>
          <div className="sec-head">
            <h2>따로 사면 더 비싸요.</h2>
            <p className="lead">한 패스에 다 담았습니다.</p>
          </div>
          <div className={styles.table}>
            {items.map((item) => (
              <div key={item.label} className={styles.row}>
                <span className={styles.itemLabel}>{item.label}</span>
                <span className={styles.note}>{item.note}</span>
                <span className={`lat ${styles.price}`}>{item.price}</span>
              </div>
            ))}
            <div className={`${styles.row} ${styles.subtotal}`}>
              <span>따로 살 경우</span>
              <span />
              <span className={`lat ${styles.price}`} style={{ textDecoration: 'line-through', opacity: .5 }}>
                ₩{TOTAL_IF_SEPARATE.toLocaleString()}
              </span>
            </div>
            <div className={`${styles.row} ${styles.total}`}>
              <span>🎟 펫스카웃 패스 (올인원)</span>
              <span className={styles.save}>₩{(TOTAL_IF_SEPARATE - OUR_PRICE).toLocaleString()} 절약</span>
              <span className={`lat ${styles.bigPrice}`}>₩{OUR_PRICE.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
