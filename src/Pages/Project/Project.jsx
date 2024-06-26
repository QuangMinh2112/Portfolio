import classNames from 'classnames/bind'
import styles from './Project.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { projects } from '../../utils/constants'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
const cx = classNames.bind(styles)

const Project = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const showNotice = () => {
    toast.warn('The project is in the process of completion')
  }
  return (
    <section className={cx('project', 'section')} id="project">
      <h2 className={cx('section__title', 'uppercase')}>Personal Project</h2>
      <span className={cx('section__subtitle')}>Each project is aunique piece of development</span>
      <div className={cx('portfolio__container', 'container')}>
        <Slider {...settings}>
          {projects?.map((item) => (
            <>
              <div key={item.id} className={cx('portfolio__content', 'grid')}>
                <img loading="lazy" src={item?.image} alt="project" className={cx('portfolio__img')} />
                <div className={cx('portfolio__data')}>
                  <h3 className={cx('portfolio__title')}>{item?.title}</h3>
                  <p className={cx('portfolio__description')}>{item?.description}</p>
                  {item?.status === 'Unfinished' ? (
                    <div className={cx('button', 'button--flex')} onClick={showNotice}>
                      Demo
                      <i className="uil uil-arrow-right"></i>
                    </div>
                  ) : (
                    <Link to={item?.link} className={cx('button', 'button--flex')}>
                      Demo
                      <i className="uil uil-arrow-right"></i>
                    </Link>
                  )}
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Project
