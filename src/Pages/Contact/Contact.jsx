import classNames from 'classnames/bind'
import styles from './Contact.module.scss'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const cx = classNames.bind(styles)

const Contact = () => {
  const form = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const sendEmail = (e) => {
    e.preventDefault()
    if (!name || !email || !description) {
      toast.warn('Missing value Input !!!')
    } else {
      emailjs.sendForm('service_zxgr3lf', 'template_osh4oc8', form.current, 'sSCtOt9CnDU6vqKWn').then(
        (result) => {
          if (result.text === 'OK') {
            toast.success('Send email success !')
          }
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.log(error.text)
        }
      )
    }
  }
  return (
    <section className={cx('contact', 'section')} id="contact">
      <h2 className={cx('section__title', 'uppercase')}>Get in touch</h2>
      <span className={cx('section__subtitle')}>Contact me</span>
      <div className={cx('contact__container', 'container', 'grid')}>
        <div className={cx('contact__content')}>
          <h3 className={cx('section__subtitle', 'uppercase')}>Talk to me</h3>

          <div className={cx('contact__info')}>
            <div className={cx('contact__card')}>
              <i className={cx('uil uil-phone', 'contact__card-icon')}></i>
              <h3 className={cx('contact__card-title')}>Phone</h3>
              <span className={cx('contact__card-data')}>(+84) 76 366 8006</span>
              <a href="/#" className={cx('contact__button')}>
                Call me
                <i className={cx('bx bx-right-arrow-alt contact__button-icon')}></i>
              </a>
            </div>
            <div className={cx('contact__card')}>
              <i className={cx('uil uil-facebook-messenger', 'contact__card-icon')}></i>
              <h3 className={cx('contact__card-title')}>Messenger</h3>
              <span className={cx('contact__card-data')}>Quang Minh</span>
              <a href="https://www.facebook.com/profile.php?id=100023223182625" className={cx('contact__button')}>
                Write me
                <i className={cx('bx bx-right-arrow-alt contact__button-icon')}></i>
              </a>
            </div>
          </div>
        </div>
        <div className={cx('contact__content')}>
          <h3 className={cx('section__subtitle', 'uppercase')}>Write me your project</h3>
          <form action="" className={cx('contact__form')} ref={form} onSubmit={sendEmail}>
            <div className={cx('contact__form-div')}>
              <label htmlFor="name" className={cx('contact__form-tag')}>
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={cx('contact__form-input')}
                placeholder="Name"
              />
            </div>
            <div className={cx('contact__form-div')}>
              <label htmlFor="email" className={cx('contact__form-tag')}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cx('contact__form-input')}
                placeholder="Email"
              />
            </div>
            <div className={cx('contact__form-div', 'contact__form-area')}>
              <label htmlFor="" className={cx('contact__form-tag')}>
                Email content
              </label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write to me what do you want"
                id=""
                cols="30"
                rows="10"
                className={cx('contact__form-input')}
              ></textarea>
            </div>
            <button className={cx('button', 'button--flex')} type="submit">
              Send Email
              <i className="uil uil-message"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
