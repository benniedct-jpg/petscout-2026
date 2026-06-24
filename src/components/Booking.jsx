import { useState } from 'react'
import confetti from 'canvas-confetti'
import styles from './Booking.module.css'

function fireConfetti() {
  confetti({ particleCount: 140, spread: 90, origin: { y: 0.6 }, colors: ['#FF5A4D', '#FFC23B', '#1D6B44', '#fff'] })
  setTimeout(() => confetti({ particleCount: 80, spread: 130, origin: { y: 0.7 }, angle: 60 }), 300)
  setTimeout(() => confetti({ particleCount: 80, spread: 130, origin: { y: 0.7 }, angle: 120 }), 500)
}

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', petName: '', sites: '1' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setError('이름과 연락처는 필수입니다.')
      return
    }
    setError('')
    setLoading(true)

    // Supabase 연동 준비
    // import { createClient } from '@supabase/supabase-js'
    // const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)
    // await supabase.from('petscout_applications').insert([{
    //   name: form.name, phone: form.phone, pet_name: form.petName, sites: Number(form.sites)
    // }])

    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
    fireConfetti()
  }

  return (
    <section className={styles.book} id="book">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow" style={{ color: 'var(--yellow)' }}>Apply Now</div>
          <h2 style={{ color: '#fff' }}>지금 참여 신청하기 🐾</h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,.8)' }}>
            신청 후 사이트 배정 및 결제 안내 문자를 드립니다.<br />
            350팀 한정 · 먼저 신청한 순으로 배정됩니다.
          </p>
        </div>

        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successEmoji}>🎉🐾</div>
            <h3>신청 완료!</h3>
            <p>
              곧 연락드리겠습니다.<br />
              <small>신청 내용은 48시간 내 문자로 안내드려요.</small>
            </p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>
                  대표자 이름 <span className={styles.req}>*</span>
                </label>
                <input
                  className={styles.input}
                  value={form.name}
                  onChange={set('name')}
                  placeholder="홍길동"
                  autoComplete="name"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>
                  연락처 <span className={styles.req}>*</span>
                </label>
                <input
                  className={styles.input}
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="010-0000-0000"
                  inputMode="tel"
                  autoComplete="tel"
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>반려견 이름</label>
                <input
                  className={styles.input}
                  value={form.petName}
                  onChange={set('petName')}
                  placeholder="예) 몽이, 콩이"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>희망 사이트 수</label>
                <select className={`${styles.input} ${styles.select}`} value={form.sites} onChange={set('sites')}>
                  <option value="1">1사이트 (성인 4명 + 반려동물 2마리)</option>
                  <option value="2">2사이트</option>
                  <option value="3">3사이트 이상</option>
                </select>
              </div>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button
              type="submit"
              className={`btn lg ${styles.submitBtn}`}
              disabled={loading}
            >
              {loading ? '신청 중...' : '지금 참여 신청하기 →'}
            </button>
            <p className={styles.notice}>
              🔒 개인정보는 행사 운영 목적으로만 사용됩니다 · ✅ 신청 후 48시간 내 연락
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
