import { useEffect } from 'react'
import Info from '../../components/Info/Info'
import styles from './About.module.scss'
import classNames from 'classnames/bind'
import { useRef } from 'react'
import CV from '../../assets/img/CV-NGUYENDOQUANGMINH.pdf'

const cx = classNames.bind(styles)

const About = () => {
  const ref = useRef()
  useEffect(() => {
    const text = ref.current
    text.innerHTML = text.innerText
      .split('')
      .map((char, i) => `<span style='transform:rotate(${i * 8.1}deg)'>${char}</span>`)
      .join('')
  }, [])
  return (
    <section className={cx('about', 'section')} id="about">
      <h2 className={cx('section__title', 'uppercase')}>About me</h2>
      <span className={cx('section__subtitle')}>My Introduction</span>

      <div className={cx('about__container', 'container', 'grid')}>
        <div className={cx('about__img')}>
          <div className={cx('about__img__circle')}>
            <div className={cx('circle')}>
              <div className={cx('logo')}></div>
              <div className={cx('text')}>
                <p ref={ref}>Front End - Web - Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('about__data')}>
          <Info />
          <p className={cx('about__description')}>
            As a Frontend Developer, I create user-friendly website interfaces. I feel very happy when I create what
            people want. I think i have a good amount of experience while working on my own personal projects.
          </p>
          <a href={CV} download="" className={cx('button', 'button--flex')}>
            Download CV <i className={cx('uil uil-file-info-alt', 'about__icon')}></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
