import Image from 'next/image'
import Navbar from '../components/Navbar'
import HireForm from '../components/HireForm'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero" style={{ padding: 0 }}>
        <div className="hero-text">
          <p className="hero-eyebrow">Est. in Southgate · London N14</p>
          <h1 className="hero-title">
            Your local<br /><em>corner</em><br />coffee bar.
          </h1>
          <p className="hero-tagline">Sip, relax, enjoy — no rush, no reservations.</p>
          <p className="hero-body">
            A proper neighbourhood spot next to Southgate tube. Specialty coffee, homemade food, a warm seat, and faces you&apos;ll start to recognise.
          </p>
          <a href="#findus" className="hero-cta">Find Us</a>
        </div>
        <div className="hero-image">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80"
            alt="Inside Claud W Dennis coffee bar"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="hero-image-overlay" />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="divider">
        <div className="divider-line" />
        <div className="divider-dot" />
        <div className="divider-line" />
      </div>

      {/* ABOUT */}
      <section className="about" id="about">
        <div>
          <span className="section-eyebrow">Who we are</span>
          <h2 className="section-title">A neighbourhood institution, one cup at a time.</h2>
          <div className="about-body">
            <p>Claud W Dennis has been a beloved fixture in Southgate since the beginning. What started as a passion for great coffee became a proper local haunt — the kind of place where regulars have their order memorised and strangers become friends.</p>
            <p>We serve speciality coffee, freshly made food, and the occasional craft beer. We have iPads for those who need them, a no-laptop rule for those who don&apos;t, and a fireplace in winter that makes everything better.</p>
            <p>The owner is almost always around. That&apos;s the point.</p>
          </div>
        </div>
        <div className="about-image">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80"
            alt="Claud W Dennis interior"
            width={700}
            height={875}
            style={{ width: '100%', height: 'auto', aspectRatio: '4/5', objectFit: 'cover' }}
          />
          <div className="about-image-caption">&ldquo;Best coffee in the area. Full stop.&rdquo;</div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="social-section">
        <span className="section-eyebrow">Follow Along</span>
        <h2 className="section-title">Find us on social media.</h2>
        <p className="social-sub">Keep up with what&apos;s brewing — new menu items, events, and daily life at the bar.</p>
        <div className="social-grid">
          <a href="https://www.instagram.com/claud_w_dennis/" target="_blank" rel="noopener noreferrer" className="social-card">
            <div className="social-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </div>
            <p className="social-name">Instagram</p>
            <p className="social-handle">@claud_w_dennis</p>
            <p className="social-arrow">↗</p>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61572115737421" target="_blank" rel="noopener noreferrer" className="social-card">
            <div className="social-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </div>
            <p className="social-name">Facebook</p>
            <p className="social-handle">Claud W Dennis</p>
            <p className="social-arrow">↗</p>
          </a>
          <a href="https://www.tiktok.com/@claud.w.dennis" target="_blank" rel="noopener noreferrer" className="social-card">
            <div className="social-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </div>
            <p className="social-name">TikTok</p>
            <p className="social-handle">@claud.w.dennis</p>
            <p className="social-arrow">↗</p>
          </a>
        </div>
      </section>

      {/* COFFEE & MENU */}
      <section className="offer" id="offer">
        <span className="section-eyebrow">Coffee &amp; Menu</span>
        <h2 className="section-title">Something for every hour of the day.</h2>
        <div className="offer-grid">
          <div className="offer-card">
            <div className="offer-card-tag">Coffee</div>
            <h3 className="offer-card-title">Monmouth Roasted</h3>
            <p className="offer-card-body">We use Monmouth Coffee beans — one of London&apos;s most respected roasters. From a classic espresso to a flat white, cortado, filter, or cold brew, every cup is made with care.</p>
            <ul className="offer-card-list">
              <li>Espresso &amp; all espresso drinks</li>
              <li>Filter &amp; cold brew</li>
              <li>Oat, almond &amp; soy available</li>
            </ul>
          </div>
          <div className="offer-card">
            <div className="offer-card-tag">Food</div>
            <h3 className="offer-card-title">Handmade &amp; Fresh</h3>
            <p className="offer-card-body">Everything on the food menu is made by hand. Sandwiches built to order, pastries baked fresh, homemade cookies, and a rotating selection of sweet treats. Come early.</p>
            <ul className="offer-card-list">
              <li>Handmade sandwiches</li>
              <li>Pastries &amp; baked goods</li>
              <li>Cookies &amp; sweet treats</li>
            </ul>
          </div>
          <div className="offer-card">
            <div className="offer-card-tag">Drinks</div>
            <h3 className="offer-card-title">Cocktails, Beer &amp; Wine</h3>
            <p className="offer-card-body">When the afternoon calls for something stronger, we&apos;ve got you covered. Craft beers, a curated wine list, and cocktails — come for coffee, stay for a glass.</p>
            <ul className="offer-card-list">
              <li>Handcrafted cocktails</li>
              <li>Craft beers on rotation</li>
              <li>Wine — red, white &amp; rosé</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DELIVEROO */}
      <div className="deliveroo-bar">
        <p className="deliveroo-text">Can&apos;t make it in? Order online — we&apos;re on Deliveroo.</p>
        <a
          href="https://deliveroo.co.uk/menu/london/southgate/claud-w-dennis-coffee?srsltid=AfmBOopmA2MlXS5_xclxn22LVrYKY9P6gyJwSTL3oLjMwkjhgFqzSR3l"
          target="_blank"
          rel="noopener noreferrer"
          className="deliveroo-btn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
          Order on Deliveroo
        </a>
      </div>

      {/* PHOTO STRIP */}
      <div className="photo-strip">
        {[
          { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80', alt: 'Coffee' },
          { src: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600&q=80', alt: 'Pastries' },
          { src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80', alt: 'Atmosphere' },
          { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80', alt: 'Bar' },
        ].map((img) => (
          <div key={img.alt} className="photo-strip-item">
            <Image src={img.src} alt={img.alt} width={400} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      {/* WHAT'S ON */}
      <section className="whatson" id="whatson">
        <div className="whatson-sticky">
          <span className="section-eyebrow">What&apos;s On</span>
          <h2 className="section-title">Things happening at the bar.</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.8, marginTop: '1rem' }}>
            From live music evenings to community mornings — we like a bit of life in the room. Keep an eye on our Instagram for the latest.
          </p>
          <a href="https://www.instagram.com/claud_w_dennis/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '2rem', fontFamily: 'var(--font-dm-mono)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--amber)', textDecoration: 'none', borderBottom: '1px solid var(--amber)', paddingBottom: '2px' }}>
            @claud_w_dennis ↗
          </a>
        </div>
        <div className="event-list">
          {[
            { date: 'Regular', name: 'Live Music Evenings', desc: 'Local musicians taking over the corner. Good coffee, better atmosphere. Check Instagram for upcoming dates.' },
            { date: 'Weekly', name: 'Community Morning', desc: 'Come as you are. Grab a seat, grab a coffee. A regular morning where locals pull up a chair and put the world to rights.' },
            { date: 'Seasonal', name: 'Guest Roaster Features', desc: 'We regularly showcase beans from roasters we respect. Limited retail bags available. Ask at the counter what\'s on rotation.' },
            { date: 'Always', name: 'Deliveroo & Takeaway', desc: 'Can\'t make it in? We\'re on Deliveroo. Though honestly, it\'s better in person.' },
          ].map((event) => (
            <div key={event.name} className="event-item">
              <div className="event-date">{event.date}</div>
              <div>
                <p className="event-name">{event.name}</p>
                <p className="event-desc">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews">
        <p className="reviews-heading">What people are saying — Google · 4.7★ · 400+ reviews</p>
        <div className="reviews-grid">
          {[
            { text: '"Hands down, the best coffee in the area. I\'m a coffee snob and if you want quality, this is your stop in Southgate."' },
            { text: '"A brilliant little cafe with fantastic coffee and a chilled but interesting vibe. The staff are polite and accommodating."' },
            { text: '"This is my favourite coffee shop ever. The atmosphere is heartwarming, relaxed, and peaceful. A proper local gem."' },
          ].map((r, i) => (
            <div key={i} className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">{r.text}</p>
              <p className="review-author">— Google Review</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRIVATE HIRE */}
      <section className="hire" id="hire">
        <div>
          <span className="section-eyebrow">Private Hire</span>
          <h2 className="section-title">Have the place to yourself.</h2>
          <p className="hire-body">
            Looking for a space for your event, gathering, or celebration? We hire out the bar for private functions — intimate enough to feel personal, characterful enough to be memorable.
          </p>
          <ul className="hire-list">
            <li>Evening &amp; weekend availability</li>
            <li>Full bar and coffee service</li>
            <li>Catering options available</li>
            <li>Up to 40 guests</li>
            <li>Flexible setup</li>
          </ul>
          <HireForm />
        </div>
        <div className="hire-image">
          <Image
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=900&q=80"
            alt="Claud W Dennis bar space for private hire"
            width={700}
            height={933}
            style={{ width: '100%', height: 'auto', aspectRatio: '3/4', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* FIND US */}
      <div className="findus" id="findus">
        <div className="findus-info">
          <span className="section-eyebrow">Find Us</span>
          <h2 className="section-title">Come and say hello.</h2>
          <div className="info-block">
            <p className="info-label">Address</p>
            <p className="info-value">
              3 Chase Side<br />London, N14 5BP<br />
              <span style={{ fontSize: '0.8rem', color: 'rgba(245,239,224,0.45)' }}>Next door to Southgate Underground</span>
            </p>
          </div>
          <div className="info-block">
            <p className="info-label">Hours</p>
            <p className="info-value">
              Monday – Friday &nbsp;·&nbsp; 7:00am – 8:00pm<br />
              Saturday &nbsp;·&nbsp; 9:00am – 8:00pm<br />
              Sunday &nbsp;·&nbsp; 10:00am – 8:00pm
            </p>
          </div>
          <div className="info-block">
            <p className="info-label">Contact</p>
            <p className="info-value">
              <a href="tel:+442082457466">020 8245 7466</a><br />
              <a href="mailto:hello@claudwdennis.com">hello@claudwdennis.com</a>
            </p>
          </div>
          <div className="info-block">
            <p className="info-label">Follow Along</p>
            <p className="info-value">
              <a href="https://www.instagram.com/claud_w_dennis/" target="_blank" rel="noopener noreferrer">Instagram ↗</a> &nbsp;·&nbsp;
              <a href="https://www.facebook.com/profile.php?id=61572115737421" target="_blank" rel="noopener noreferrer">Facebook ↗</a> &nbsp;·&nbsp;
              <a href="https://www.tiktok.com/@claud.w.dennis" target="_blank" rel="noopener noreferrer">TikTok ↗</a>
            </p>
          </div>
        </div>
        <div className="findus-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.0!2d-0.1283597!3d51.6325808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876191ac2a663a1%3A0x1d7a6aae17bfa76c!2sClaud%20W%20Dennis%20Coffee!5e0!3m2!1sen!2suk!4v1700000000000"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Claud W Dennis location map"
          />
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Claud W. Dennis — Southgate, London</div>
        <div className="footer-links">
          <a href="https://www.instagram.com/claud_w_dennis/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=61572115737421" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.tiktok.com/@claud.w.dennis" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="mailto:hello@claudwdennis.com">Email</a>
        </div>
        <div className="footer-copy">© 2025 Claud W Dennis</div>
      </footer>
    </>
  )
}
