'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">Claud W<span>.</span> Dennis</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#offer">Coffee &amp; Menu</a></li>
        <li><a href="#whatson">What&apos;s On</a></li>
        <li><a href="#hire">Private Hire</a></li>
        <li><a href="#findus">Find Us</a></li>
      </ul>
    </nav>
  )
}
