'use client'
import { useState } from 'react'

export default function HireForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/hire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok || !data.success) throw new Error(data.error || 'Failed')

      setStatus('success')
      setForm({ name: '', email: '', phone: '', date: '', guests: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="hire-form">
      <h3>Send an Enquiry</h3>

      {status === 'success' && (
        <div className="form-success">
          ✓ Thanks! We&apos;ll be in touch within 24 hours.
        </div>
      )}

      {status === 'error' && (
        <div className="form-error">
          Something went wrong. Please try again or email us directly at hello@claudwdennis.com
        </div>
      )}

      {status !== 'success' && (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                id="name" name="name" type="text" required
                value={form.name} onChange={handleChange} placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                id="email" name="email" type="email" required
                value={form.email} onChange={handleChange} placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone" name="phone" type="tel"
                value={form.phone} onChange={handleChange} placeholder="+44 ..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input
                id="date" name="date" type="date"
                value={form.date} onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <select id="guests" name="guests" value={form.guests} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="up to 10">Up to 10</option>
              <option value="10-20">10 – 20</option>
              <option value="20-30">20 – 30</option>
              <option value="30-40">30 – 40</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Tell us about your event *</label>
            <textarea
              id="message" name="message" required
              value={form.message} onChange={handleChange}
              placeholder="Type of event, any special requirements..."
            />
          </div>

          <button type="submit" className="form-submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Enquiry →'}
          </button>
        </form>
      )}
    </div>
  )
}
