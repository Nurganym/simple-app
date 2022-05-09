import React from 'react'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="/">Instagram</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          {/* <section className="footer-info-left__name">Spoon</section> */}
          <section className="footer-info-left__email">
            spoon-info@gmail.com
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info-center__license">
            Image License Info
          </section>
          <section className="footer-info-center__powered">
            Powered by Webflow
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info-right__number">+996777125654</section>
          <section className="footer-info-right__contact">Contact Us</section>
        </section>
      </section>
      <hr className="footer-seperator" />
      <section className="footer-info-left__reserved">
        © 2022 Spoon Inc, All rights reserved.
      </section>
    </section>
  )
}

export default Footer
