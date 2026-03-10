import Info from '../../components/Info/Info'
import styles from './About.module.scss'
import classNames from 'classnames/bind'
import CV from '../../assets/img/CV.pdf'
import avatar from '../../assets/img/avatar.jpg'

const cx = classNames.bind(styles)

const About = () => {
  return (
    <section className={cx('about', 'section')} id="about">
      <h2 className={cx('section__title', 'uppercase')}>About me</h2>
      <span className={cx('section__subtitle')}>My Introduction</span>

      <div className={cx('about__container', 'container', 'grid')}>
        {/* LEFT — Avatar card */}
        <div className={cx('about__img-wrapper')}>
          <div className={cx('about__img-card')}>
            <img src={avatar} alt="Quang Minh" className={cx('about__avatar')} />
            <div className={cx('about__badge')}>
              <span className={cx('about__badge-dot')}></span>
              Available for hire
            </div>
          </div>
          <div className={cx('about__img-blob')}></div>
        </div>

        {/* RIGHT — Data */}
        <div className={cx('about__data')}>
          <Info />
          <p className={cx('about__description')}>
            I&apos;m a passionate <strong>Frontend Developer</strong> who loves building clean, performant, and visually
            appealing web applications. With hands-on experience in <strong>React</strong>, <strong>TypeScript</strong>,
            and <strong>Node.js</strong>, I&apos;ve delivered full-stack projects ranging from e-commerce platforms to
            real-time dashboards. I thrive in collaborative environments and am always eager to learn cutting-edge
            technologies.
          </p>
          <a href={CV} download="" className={cx('button', 'button--flex')}>
            Download CV <i className="uil uil-file-info-alt"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
