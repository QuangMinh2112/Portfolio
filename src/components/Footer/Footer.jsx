import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={cx('footer')} id="footer">
      <div className={cx('footer__container', 'container')}>
        <div className={cx('footer__top')}>
          <h2 className={cx('footer__title')}>Quang Minh</h2>
          <p className={cx('footer__tagline')}>Building the web, one component at a time.</p>
          <div className={cx('footer__socials')}>
            <a
              href="https://github.com/QuangMinh2112"
              target="_blank"
              rel="noreferrer"
              className={cx('footer__social-link')}
            >
              <i className="uil uil-github"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100023223182625"
              target="_blank"
              rel="noreferrer"
              className={cx('footer__social-link')}
            >
              <i className="uil uil-facebook"></i>
            </a>
            <a href="mailto:quangminh2112@gmail.com" className={cx('footer__social-link')}>
              <i className="uil uil-envelope"></i>
            </a>
          </div>
        </div>
        <div className={cx('footer__divider')}></div>
        <p className={cx('footer__copyright')}>
          © {new Date().getFullYear()} Quang Minh. Crafted with <span className={cx('footer__heart')}>♥</span> using
          React & Vite.
        </p>
      </div>
    </footer>
  )
}

export default Footer
