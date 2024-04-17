import styles from './TechStack.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
import css from '../../../../assets/skills/css.png'
import html from '../../../../assets/skills/html.png'
import github1 from '../../../../assets/skills/github1.png'
import mongo from '../../../../assets/skills/mongo.png'
import node from '../../../../assets/skills/node.png'
import react from '../../../../assets/skills/react.png'
import materialUI from '../../../../assets/skills/materialUI.png'
import tailwind from '../../../../assets/skills/tailwind.png'
import js from '../../../../assets/skills/js.jpg'
import ts from '../../../../assets/skills/Typescript.png'

function TechStack() {
  return (
    <div className={cx('home__techStack')}>
      <div className={cx('home__techStack__Container')}>
        <span className={cx('home__title')}>Tech Skills</span>
        <div className={cx('home__my__skills')}>
          <div className={cx('home__box__img')}>
            <img loading="lazy" src={html} alt="techTask" />
          </div>
          <div className={cx('home__box__img')}>
            <img loading="lazy" src={css} alt="techTask" />
          </div>
          <div className={cx('home__box__img')}>
            <img loading="lazy" src={js} alt="techTask" />
          </div>
          <div className={cx('home__box__img')}>
            <img loading="lazy" src={react} alt="techTask" />
          </div>
          <div className={cx('home__box__img')}>
            <img loading="lazy" src={mongo} alt="techTask" />
          </div>
          <div className={cx('home__box__img')}>
            <img loading="lazy" src={node} alt="techTask" />
          </div>
          <div className={cx('home__box__img')}>
            <img loading="lazy" src={github1} alt="techTask" />
          </div>
          <div className={cx('home__box__img')}>
            <img loading="lazy" src={materialUI} alt="techTask" />
          </div>
          <div className={cx('home__box__img')}>
            <img loading="lazy" src={tailwind} alt="techTask" />
          </div>
          <div className={cx('home__box__img')}>
            <img loading="lazy" src="https://sass-lang.com/assets/img/logos/logo.svg" alt="techTask" />
          </div>
          <div className={cx('home__box__img')}>
            <img
              loading="lazy"
              src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
              alt="techTask"
            />
          </div>
          <div className={cx('home__box__img')}>
            <img loading="lazy" src={ts} alt="typescript" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
