import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={cx('footer')} id="footer">
      <div className={cx('footer__container')}>
        <h2 className={cx('footer__title')}>Quang Minh</h2>
        <p className={cx('footer__coppyright')}>© Quang Minh. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
