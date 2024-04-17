import styles from './Info.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Info = () => {
  return (
    <div className={cx('about__info', 'grid')}>
      <div className={cx('about__box')}>
        <i className={cx('bx bx-award')}></i>
        <h3 className={cx('about__title')}>Experience</h3>
        <span className={cx('about__subtitle')}>4 month</span>
      </div>
      <div className={cx('about__box')}>
        <i className={cx('bx bx-briefcase-alt')}></i>
        <h3 className={cx('about__title')}>Personal Project</h3>
        <span className={cx('about__subtitle')}>3+</span>
      </div>
      <div className={cx('about__box')}>
        <i className="uil uil-phone"></i>
        <h3 className={cx('about__title')}>Contact</h3>
        <span className={cx('about__subtitle')}>0763668006</span>
      </div>
    </div>
  )
}

export default Info
