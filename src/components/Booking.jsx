import { useState, useCallback, useMemo } from 'react'
import confetti from 'canvas-confetti'
import styles from './Booking.module.css'

const ZONES = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const PER_ZONE = 50
const TOTAL = ZONES.length * PER_ZONE
const PRICE = 220000

function isTaken(zone, n) {
  return ((zone.charCodeAt(0) * 7 + n * 13) % 5) === 0
}

const takenCount = ZONES.reduce((acc, z) => {
  for (let n = 1; n <= PER_ZONE; n++) {
    if (isTaken(z, n)) acc++
  }
  return acc
}, 0)

function fireConfetti() {
  confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ['#FF5A4D', '#FFC23B', '#2C4BE0', '#fff'] })
  setTimeout(() => confetti({ particleCount: 60, spread: 120, origin: { y: 0.7 }, angle: 60 }), 300)
  setTimeout(() => confetti({ particleCount: 60, spread: 120, origin: { y: 0.7 }, angle: 120 }), 500)
}

export default function Booking() {
  const [activeZone, setActiveZone] = useState('A')
  const [selected, setSelected] = useState(new Set())
  const [confirmed, setConfirmed] = useState(false)

  const toggleSite = useCallback((id) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }, [])

  const selectedArr = [...selected]
  const remaining = TOTAL - takenCount - selectedArr.length

  const handleBook = () => {
    if (selectedArr.length === 0) return
    fireConfetti()
    setConfirmed(true)
    setTimeout(() => setConfirmed(false), 4000)
  }

  return (
    <section className={styles.book} id="book">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow" style={{ color: 'var(--yellow)' }}>Pick your spot</div>
          <h2 style={{ color: '#fff' }}>지도에서 골라 바로 예약 🎟</h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,.8)' }}>
            350 사이트 중 빈 자리를 선택하세요. 결제하면 그 자리는 바로 내 자리, 다른 사람은 예약 불가.
          </p>
        </div>

        {/* Remaining sites bar */}
        <div className={styles.remainBar}>
          <span className={`lat ${styles.remainNum}`}>{remaining}</span>
          <div className={styles.remainInfo}>
            <span>/ {TOTAL} 사이트 남음</span>
            <div className={styles.progressWrap}>
              <div className={styles.progress} style={{ width: `${(remaining / TOTAL) * 100}%` }} />
            </div>
          </div>
          <span className={styles.hurry}>🔥 서두르세요!</span>
        </div>

        <div className={styles.ticket}>
          {/* Map side */}
          <div className={styles.map}>
            <div className={styles.mapTop}>
              <div className={styles.zoneTabs}>
                {ZONES.map((z) => (
                  <button
                    key={z}
                    className={`${styles.ztab} ${activeZone === z ? styles.on : ''}`}
                    onClick={() => setActiveZone(z)}
                  >
                    존 {z}
                  </button>
                ))}
              </div>
              <div className={styles.legend}>
                <span><i className={`${styles.dot} ${styles.dotOpen}`} />가능</span>
                <span><i className={`${styles.dot} ${styles.dotTaken}`} />마감</span>
                <span><i className={`${styles.dot} ${styles.dotSel}`} />선택</span>
              </div>
            </div>
            <div className={styles.grid}>
              {Array.from({ length: PER_ZONE }, (_, i) => {
                const n = i + 1
                const id = activeZone + String(n).padStart(2, '0')
                const taken = isTaken(activeZone, n)
                const isSelected = selected.has(id)
                return (
                  <div
                    key={id}
                    className={`lat ${styles.site} ${taken ? styles.siteTaken : ''} ${isSelected ? styles.siteSel : ''}`}
                    onClick={taken ? undefined : () => toggleSite(id)}
                  >
                    {n}
                  </div>
                )
              })}
            </div>
            <p className={styles.note}>＊ 실제 배치도 업로드 시 구역별 실측 지도가 들어갑니다.</p>
          </div>

          {/* Cart side */}
          <div className={styles.stub}>
            <h3>🎟 내 티켓</h3>
            <p className={styles.sub}>선택한 사이트가 담겨요</p>
            <div className={styles.chips}>
              {selectedArr.length > 0
                ? selectedArr.map((s) => <span key={s} className={styles.chip}>{s}</span>)
                : <span className={styles.chipEmpty}>사이트를 선택하세요</span>
              }
            </div>
            <div className={styles.lnRow}><span>2박3일 사이트</span><b>{selectedArr.length}면</b></div>
            <div className={styles.lnRow}><span>올인원 패스</span><b>포함</b></div>
            <div className={styles.lnRow}><span>굿즈 &amp; 배지</span><b>포함</b></div>
            <div className={styles.tot}>
              <span>합계</span>
              <span className={`lat ${styles.amt}`}>₩{(selectedArr.length * PRICE).toLocaleString()}</span>
            </div>
            {confirmed
              ? <div className={styles.confirmed}>✅ 예약이 확정됐어요!<br /><small>실제 서비스 연동 후 결제됩니다</small></div>
              : (
                <button
                  className="btn"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 'auto', opacity: selectedArr.length === 0 ? 0.5 : 1 }}
                  onClick={handleBook}
                >
                  간편결제로 예약 확정 →
                </button>
              )
            }
            <div className={styles.pg}>
              <span>KakaoPay</span>
              <span>NaverPay</span>
              <span>카드</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
