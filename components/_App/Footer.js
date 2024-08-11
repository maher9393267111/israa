import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <Link href="/">
                  <a className="logo">
                    <img src="/images/logo3.png" alt="logo" />
                  </a>
                </Link>

                <p>
                  Descipt
                </p>

                <ul className="social-link">
                  <li>
                    <a href="https://www.facebook.com/NamSonLe.2912" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 offset-lg-1">
              <div className="single-footer-widget">
                <h3>Explore</h3>
                <ul className="footer-links-list">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses">
                      <a>Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
 
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Address</h3>
                <ul className="footer-contact-info">
                  <li>
                    <i className="bx bx-map"></i>
                    27 Tran Duy Hung, Cau Giay, Ha Noi
                  </li>
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <a href="tel:+123456789">+1 (123) 456 7890</a>
                  </li>
                  <li>
                    <i className="bx bx-envelope"></i>
                    <a href="mailto:hello@escfpt.com">hello@escfpt.com</a>
                  </li>
                  {/* <li>
                    <i className="bx bxs-inbox"></i>
                    <a href="tel:+557854578964">+55 785 4578964</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  <i className="bx bx-copyright"></i>
                  {currentYear} Engsera is Proudly Powered by{' '}
                  <a target="_blank" href="https://facebook.com/NamSonLe.2912" rel="noreferrer">
                    NSL
                  </a>
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  )
}

export default Footer
