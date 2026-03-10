import styles from './Info.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

const Info = () => {
  return (
    <div className={cx('about__info', 'grid')}>
      <div className={cx('about__box')}>
        <i className={cx('bx bx-award about__box-icon')}></i>
        <h3 className={cx('about__title')}>Experience</h3>
        <span className={cx('about__subtitle')}>1+ Year</span>
      </div>
      <div className={cx('about__box')}>
        <i className={cx('bx bx-briefcase-alt about__box-icon')}></i>
        <h3 className={cx('about__title')}>Projects</h3>
        <span className={cx('about__subtitle')}>5 Completed</span>
      </div>
      <div className={cx('about__box')}>
        <i className={cx('uil uil-github about__box-icon')}></i>
        <h3 className={cx('about__title')}>GitHub</h3>
        <span className={cx('about__subtitle')}>QuangMinh2112</span>
      </div>
    </div>
  )
}

export default Info
