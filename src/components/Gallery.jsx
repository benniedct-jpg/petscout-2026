import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Gallery.module.css'

const photos = [
  { label: '캠핑 사이트 전경', wide: true },
  { label: '인디밴드 무대' },
  { label: '댕댕이들 🐾' },
  { label: '캠프파이어 🔥' },
  { label: '미션 배지 수여식 🏅' },
  { label: '반려동물 축제 부스', wide: true },
  { label: '별빛 아래 공연' },
  { label: '굿즈 패키지 🎁' },
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
            <p className="lead">실제 사진 업로드 시 이 자리를 채웁니다.</p>
          </div>
          <div className={styles.grid}>
            {photos.map((p) => (
              <div key={p.label} className={`ph ${styles.item} ${p.wide ? styles.wide : ''}`}>
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
