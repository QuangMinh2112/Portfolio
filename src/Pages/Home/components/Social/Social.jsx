import styles from './Social.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Social = () => {
  return (
    <div className={cx('home__social')}>
      <a href="https://github.com/QuangMinh2112" className={cx('home__social-icon')}>
        <i className="uil uil-github"></i>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100023223182625" className={cx('home__social-icon')}>
        <i className="uil uil-facebook"></i>
      </a>
    </div>
  )
}

export default Social
