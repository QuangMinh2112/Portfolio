import classNames from 'classnames/bind'
import styles from './Public.module.scss'
import { Header } from '../../components'
import Home from '../Home/Home'
import About from '../About/About'
import Project from '../Project/Project'
import Footer from '../../components/Footer/Footer'
import Contact from '../Contact/Contact'

const cx = classNames.bind(styles)

const Public = () => {
  return (
    <div className={cx('')}>
      <Header />
      <main className={cx('main')}>
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default Public
