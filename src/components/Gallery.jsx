import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Gallery.module.css'

const U = (id, w = 800, h = 560) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&auto=format&fit=crop&q=80`

const photos = [
  { label: '캠핑 사이트 전경',    wide: true, src: U('1587547131116-a0655a526190', 1200, 560) },
  { label: '인디밴드 무대',                   src: U('1722505531335-ae1727aef1ef') },
  { label: '댕댕이들 🐾',                     src: U('1761532979909-d9343beec20d') },
  { label: '캠프파이어 🔥',                   src: U('1758272960434-ac75a29c603e') },
  { label: '미션 배지 수여식 🏅',             src: U('1638766211854-6c4fd0b9de4f') },
  { label: '반려동물 축제 부스', wide: true, src: U('1759721367037-232697bcd378', 1200, 560) },
  { label: '별빛 아래 공연',                  src: U('1758272960205-96258d60ac1f') },
  { label: '굿즈 패키지 🎁',                  src: U('1641761926257-247d17b31284') },
]

export default function Gallery() {
  const ref = useScrollReveal()
  return (
    <section id="gallery">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="sec-head">
            <div className="eyebrow">Gallery</div>
            <h2>이런 순간들이 기다려요.</h2>
          </div>
          <div className={styles.grid}>
            {photos.map((p) => (
              <div key={p.label} className={`${styles.item} ${p.wide ? styles.wide : ''}`}>
                <img src={p.src} alt={p.label} className={styles.img} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
