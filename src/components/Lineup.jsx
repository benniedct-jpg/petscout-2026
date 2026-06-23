import styles from './Lineup.module.css'

const acts = [
  { num: '01', name: '밴드 ①', meta: 'DAY 1 · 18:30' },
  { num: '02', name: '밴드 ②', meta: 'DAY 2 · 19:30' },
  { num: '03', name: '밴드 ③ — coming soon', meta: 'TBA' },
  { num: '04', name: '반려동물 축제', meta: 'SAT · ALL DAY' },
]

const moments = [
  { label: '캠프파이어 🔥' },
  { label: '미션 배지 🏅' },
  { label: '축제 부스 🎪' },
  { label: '댕댕 친구들 🐶' },
]

export default function Lineup() {
  return (
    <section className={styles.poster} id="lineup">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow" style={{ color: 'var(--yellow)' }}>Line-up &amp; Stage</div>
          <h2 style={{ color: '#fff' }}>밤마다 무대가 열려요.</h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,.7)' }}>두 밤의 인디밴드 라인업. 순차 공개됩니다.</p>
        </div>
        <div className={styles.acts}>
          {acts.map((a) => (
            <div key={a.num} className={styles.act}>
              <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
                <span className={`lat ${styles.num}`}>{a.num}</span>
                <span className={styles.nm}>{a.name}</span>
              </div>
              <span className={`lat ${styles.meta}`}>{a.meta}</span>
            </div>
          ))}
        </div>
        <div className={styles.moments}>
          {moments.map((m) => (
            <div key={m.label} className={styles.pol}>
              <div className={`ph ${styles.polPh}`}>PHOTO</div>
              <div className={styles.cap}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
