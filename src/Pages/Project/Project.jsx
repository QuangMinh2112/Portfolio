import classNames from 'classnames/bind'
import styles from './Project.module.scss'
import { projects } from '../../utils/constants'

const cx = classNames.bind(styles)

const Project = () => {
  return (
    <section className={cx('project', 'section')} id="project">
      <h2 className={cx('section__title', 'uppercase')}>Personal Projects</h2>
      <span className={cx('section__subtitle')}>Each project is a unique piece of development</span>
      <div className={cx('portfolio__container', 'container')}>
        {projects?.map((item) => (
          <div key={item.id} className={cx('portfolio__card')}>
            <div className={cx('portfolio__img-wrapper')}>
              <img loading="lazy" src={item?.image} alt={item?.title} className={cx('portfolio__img')} />
              <div className={cx('portfolio__overlay')}>
                <a href={item?.link} target="_blank" rel="noreferrer" className={cx('portfolio__overlay-btn')}>
                  <i className="uil uil-external-link-alt"></i>
                  Live Demo
                </a>
              </div>
            </div>
            <div className={cx('portfolio__data')}>
              <div className={cx('portfolio__header')}>
                <h3 className={cx('portfolio__title')}>{item?.title}</h3>
                <div className={cx('portfolio__meta')}>
                  <span className={cx('portfolio__year')}>
                    <i className="uil uil-calendar-alt"></i>
                    {item?.year}
                  </span>
                  <span className={cx('portfolio__status', item?.status === 'Finished' ? 'finished' : 'wip')}>
                    {item?.status === 'Finished' ? '✓ Completed' : '⚙ In Progress'}
                  </span>
                </div>
              </div>
              <p className={cx('portfolio__description')}>{item?.description}</p>
              <div className={cx('portfolio__tags')}>
                {item?.tags?.map((tag) => (
                  <span key={tag} className={cx('portfolio__tag')}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project
