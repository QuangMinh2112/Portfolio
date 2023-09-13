import classNames from 'classnames/bind'
import styles from './Project.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { projects } from '../../utils/constants'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)

const Project = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <section className={cx('project', 'section')} id="project">
      <h2 className={cx('section__title', 'uppercase')}>Project</h2>
      <span className={cx('section__subtitle')}>Each project is aunique piece of development</span>
      <div className={cx('portfolio__container', 'container')}>
        <Slider {...settings}>
          {projects?.map((item) => (
            <>
              <div key={item.id} className={cx('portfolio__content', 'grid')}>
                <img src={item?.image} alt="" className={cx('portfolio__img')} />
                <div className={cx('portfolio__data')}>
                  <h3 className={cx('portfolio__title')}>{item?.title}</h3>
                  <p className={cx('portfolio__description')}>{item?.description}</p>
                  <Link to={item?.link} className={cx('button', 'button--flex')}>
                    Demo
                    <i className="uil uil-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </>
          ))}

          {/* <div className={cx('portfolio__content', 'grid')}>
            <img src={zingmp3} alt="zingMp3" className={cx('portfolio__img')} />
            <div className={cx('portfolio__data')}>
              <h3 className={cx('portfolio__title')}>ZINGMP3 CLONE</h3>
              <p className={cx('portfolio__description')}>
                My first visit to Nha Trang, the coastal city, was three years ago. It was a pleasant and memorable
                trip. Nha Trang, the capital of Khanhs Hoaf province, has one of the most popular municipal beaches in
                all of Vietnam
              </p>
              <a href="/#" className={cx('button', 'button--flex')}>
                Demo
                <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className={cx('portfolio__content', 'grid')}>
            <img src={ecommcerce} alt="" className={cx('portfolio__img')} />
            <div className={cx('portfolio__data')}>
              <h3 className={cx('portfolio__title')}>DIGITAL WORD</h3>
              <p className={cx('portfolio__description')}>
                My first visit to Nha Trang, the coastal city, was three years ago. It was a pleasant and memorable
                trip. Nha Trang, the capital of Khanhs Hoaf province, has one of the most popular municipal beaches in
                all of Vietnam
              </p>
              <a href="/#" className={cx('button', 'button--flex')}>
                Demo
                <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className={cx('portfolio__content', 'grid')}>
            <img src={ecommcerce} alt="" className={cx('portfolio__img')} />
            <div className={cx('portfolio__data')}>
              <h3 className={cx('portfolio__title')}>DIGITAL WORD</h3>
              <p className={cx('portfolio__description')}>
                My first visit to Nha Trang, the coastal city, was three years ago. It was a pleasant and memorable
                trip. Nha Trang, the capital of Khanhs Hoaf province, has one of the most popular municipal beaches in
                all of Vietnam
              </p>
              <a href="/#" className={cx('button', 'button--flex')}>
                Demo
                <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className={cx('portfolio__content', 'grid')}>
            <img src={ecommcerce} alt="" className={cx('portfolio__img')} />
            <div className={cx('portfolio__data')}>
              <h3 className={cx('portfolio__title')}>DIGITAL WORD</h3>
              <p className={cx('portfolio__description')}>
                My first visit to Nha Trang, the coastal city, was three years ago. It was a pleasant and memorable
                trip. Nha Trang, the capital of Khanhs Hoaf province, has one of the most popular municipal beaches in
                all of Vietnam
              </p>
              <a href="/#" className={cx('button', 'button--flex')}>
                Demo
                <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </div> */}
        </Slider>
      </div>
    </section>
  )
}

export default Project
