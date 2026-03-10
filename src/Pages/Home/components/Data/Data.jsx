import styles from './Data.module.scss'
import classNames from 'classnames/bind'
import hand from '../../../../assets/img/hand.svg'
import { useEffect, useState } from 'react'
const cx = classNames.bind(styles)

const roles = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Full-Stack Explorer']

const Data = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <div className={cx('home__data')}>
      <span className={cx('home__greeting')}>Hello, I&apos;m</span>
      <h1 className={cx('home__title')}>
        Quang Minh <img loading="lazy" src={hand} alt="hello" className={cx('home__hand')} />
      </h1>
      <h3 className={cx('home__subtitle')}>
        <span className={cx('typing')}>{displayed}</span>
        <span className={cx('cursor')}>|</span>
      </h3>
      <p className={cx('home__description')}>
        Passionate about crafting beautiful, performant web experiences. I turn complex problems into elegant,
        user-friendly solutions with clean code.
      </p>
      <div className={cx('home__metrics')}>
        <span>
          <strong>1+</strong> Year Experience
        </span>
        <span>
          <strong>5+</strong> Products Delivered
        </span>
      </div>
      <div className={cx('home__cta')}>
        <a href="#contact" className={cx('button', 'button--flex', 'btn__home__data')}>
          Hire Me
          <i className="uil uil-message"></i>
        </a>
        <a href="#project" className={cx('btn__outline', 'button--flex')}>
          See Work
          <i className="uil uil-arrow-right"></i>
        </a>
      </div>
    </div>
  )
}

export default Data
