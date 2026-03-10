import Info from '../../components/Info/Info'
import styles from './About.module.scss'
import classNames from 'classnames/bind'
import CV from '../../assets/img/CV.pdf'
import introVideo from '../../assets/video/01b197ab-934d-47e8-9583-da20166876b2.mp4'

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
            <video className={cx('about__video')} autoPlay muted loop playsInline preload="metadata">
              <source src={introVideo} type="video/mp4" />
            </video>
          </div>
          <div className={cx('about__badge')}>
            <span className={cx('about__badge-dot')}></span>
            Available for hire
          </div>
        </div>

        {/* RIGHT — Data */}
        <div className={cx('about__data')}>
          <Info />
          <span className={cx('about__role-badge')}>{'< Frontend Developer />'}</span>
          <p className={cx('about__description')}>
            I&apos;m a passionate <strong>Frontend Developer</strong> who loves building clean, performant, and visually
            appealing web applications. With hands-on experience in <strong>React</strong>, <strong>TypeScript</strong>,
            and <strong>Node.js</strong>, I&apos;ve delivered full-stack projects ranging from e-commerce platforms to
            real-time dashboards. I thrive in collaborative environments and am always eager to learn cutting-edge
            technologies.
          </p>
          <div className={cx('about__highlights')}>
            <span>Product-minded</span>
            <span>Clean Architecture</span>
            <span>Performance Focused</span>
          </div>
          <a href={CV} download="" className={cx('button', 'button--flex')}>
            Download CV <i className="uil uil-file-info-alt"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
