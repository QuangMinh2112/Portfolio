import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/img/logo.png'
import { menus } from '../../utils/constants'

const cx = classNames.bind(styles)

const Header = () => {
  const [toggleShowMenu, setToggleShowMenu] = useState(false)
  const scrollHeaderRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      // const el = scrollHeaderRef.current
      if (event?.currentTarget?.scrollY >= 200) {
        scrollHeaderRef?.current?.classList?.add(cx('scrollHeader'))
      } else {
        scrollHeaderRef?.current?.classList?.remove(cx('scrollHeader'))
      }
    })
  }, [])
  return (
    <header id="header" className={cx('header')} ref={scrollHeaderRef}>
      <nav className={cx('nav', 'container')}>
        <a href="/#" className={cx('nav__logo')}>
          <img src={logo} alt="logo" />
        </a>

        <div className={cx('nav__menu', `${toggleShowMenu ? 'show-menu' : 'nav__menu'}`)}>
          <ul className={cx('nav__list', 'grid')}>
            {menus?.map((el) => (
              <>
                <li key={el?.id} className={cx('nav__item')}>
                  <a href={el?.to} className={cx('nav__link')}>
                    <i className={cx('uil uil-estate', 'nav__icon')}></i>
                    {el?.text}
                  </a>
                </li>
              </>
            ))}
          </ul>
          <i className={cx('uil uil-times', 'nav__close')} onClick={() => setToggleShowMenu(!toggleShowMenu)}></i>
        </div>
        <div className={cx('nav__toggle')} onClick={() => setToggleShowMenu(!toggleShowMenu)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
