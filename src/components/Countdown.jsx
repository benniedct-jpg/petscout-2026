import { useState, useEffect, Fragment } from 'react'
import styles from './Countdown.module.css'

const TARGET = new Date('2026-09-04T15:00:00+09:00')

function calc() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  }
}

export default function Countdown() {
  const [t, setT] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'DAYS',  val: t.d },
    { label: 'HOURS', val: t.h },
    { label: 'MIN',   val: t.m },
    { label: 'SEC',   val: t.s },
  ]

  return (
    <div className={styles.wrap}>
      <div className={styles.eyebrow}>개막까지</div>
      <div className={styles.units}>
        {units.map(({ label, val }, i) => (
          <Fragment key={label}>
            <div className={styles.unit}>
              <span className={`lat ${styles.num}`}>{String(val).padStart(2, '0')}</span>
              <span className={`lat ${styles.sub}`}>{label}</span>
            </div>
            {i < units.length - 1 && <span className={styles.sep}>:</span>}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
