import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import Data from './components/Data/Data'
import Social from './components/Social/Social'
import TechStack from './components/Skills/TechStack'

const cx = classNames.bind(styles)

const Home = () => {
  return (
    <section className={cx('home', 'section')} id="home">
      <div className={cx('home__container', 'container', 'grid')}>
        <div className={cx('home__content', 'grid')}>
          <Social />
          <div className={cx('home__img')}></div>
          <Data />
        </div>
        <TechStack />
      </div>
    </section>
  )
}

export default Home
