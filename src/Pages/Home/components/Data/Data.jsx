import styles from './Data.module.scss'
import classNames from 'classnames/bind'
import hand from '../../../../assets/img/hand.svg'
const cx = classNames.bind(styles)

const Data = () => {
  return (
    <div className={cx('home__data')}>
      <h1 className={cx('home__title')}>
        Quang Minh <img loading="lazy" src={hand} alt="hello" className={cx('home__hand')} />
      </h1>
      <h3 className={cx('home__subtitle')}>FrontEnd Developer</h3>
      <p className={cx('home__description')}>
        I am a cheerful person who gets along with everyone, eager to learn new things...
      </p>
      <a href="#contact" className={cx('button', 'button--flex', 'btn__home__data')}>
        Say Hello
        <i className="uil uil-message"></i>
      </a>
    </div>
  )
}

export default Data
