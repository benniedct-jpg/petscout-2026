import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Value.module.css'

export default function Value() {
  const ref = useScrollReveal()
  return (
    <section className={styles.value} id="value">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <div className="eyebrow">왜 이 가격일까?</div>
          <p className={styles.claim}>
            캠핑비가 아니라 <b>3일짜리 페스티벌</b> 티켓이라서요.{' '}
            <u>공연·축제·미션</u>까지 전부 포함.
          </p>
          <div className={styles.vrow}>
            <div className={`${styles.v} ${styles.coral}`}>
              <div className={`lat ${styles.n}`}>01</div>
              <h3>두 밤의 라이브</h3>
              <p>인디밴드 공연 + 캠프파이어. 별빛 아래 강아지랑 듣는 무대는 여기서만.</p>
            </div>
            <div className={`${styles.v} ${styles.blue}`}>
              <div className={`lat ${styles.n}`}>02</div>
              <h3>미션 펫스카웃</h3>
              <p>곳곳의 미션을 깨고 배지를 모으는 우리 개 전용 보물찾기.</p>
            </div>
            <div className={`${styles.v} ${styles.yellow}`}>
              <div className={`lat ${styles.n}`}>03</div>
              <h3>토요일은 축제</h3>
              <p>부스·체험·포토존이 가득한 반려동물 축제가 통째로 포함.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
