import styles from './TechStack.module.scss'
import classNames from 'classnames/bind'
import { useRef, useState } from 'react'
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

const webSkills = [
  { src: html, label: 'HTML5' },
  { src: css, label: 'CSS3' },
  { src: js, label: 'JavaScript' },
  { src: ts, label: 'TypeScript' },
  { src: react, label: 'React' },
  { src: node, label: 'Node.js' },
  { src: mongo, label: 'MongoDB' },
  { src: tailwind, label: 'Tailwind' },
  { src: materialUI, label: 'MUI' },
  { src: github1, label: 'GitHub' },
  { src: 'https://sass-lang.com/assets/img/logos/logo.svg', label: 'SASS' },
  {
    src: 'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
    label: 'Redux'
  }
]

const aiSkills = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', label: 'ChatGPT' },
  { src: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg', label: 'Gemini' },
  { src: 'https://cdn.brandfetch.io/idwOHQEHLJ/theme/dark/logo.svg?c=1dxbfHSJFAPErgIQpFjBD', label: 'Claude' },
  { src: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png', label: 'Copilot' },
  { src: 'https://cursor.sh/brand/icon.svg', label: 'Cursor' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Hugging_Face_logo.svg', label: 'HuggingFace' },
  { src: 'https://cdn.worldvectorlogo.com/logos/langchain-1.svg', label: 'LangChain' },
  { src: 'https://ollama.com/public/icon-64x64.png', label: 'Ollama' }
]

function SkillSlider({ skills }) {
  const sliderRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftVal = useRef(0)
  const [dragging, setDragging] = useState(false)

  const onMouseDown = (e) => {
    isDragging.current = true
    setDragging(true)
    startX.current = e.pageX - sliderRef.current.offsetLeft
    scrollLeftVal.current = sliderRef.current.scrollLeft
  }
  const onMouseLeave = () => {
    isDragging.current = false
    setDragging(false)
  }
  const onMouseUp = () => {
    isDragging.current = false
    setDragging(false)
  }
  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    sliderRef.current.scrollLeft = scrollLeftVal.current - (x - startX.current) * 1.5
  }
  const scroll = (dir) => sliderRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' })

  return (
    <div className={cx('home__slider__wrapper')}>
      <button className={cx('home__slider__btn')} onClick={() => scroll(-1)}>
        <i className="uil uil-angle-left"></i>
      </button>
      <div
        className={cx('home__slider__track', { 'home__slider__track--dragging': dragging })}
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {skills.map((skill, i) => (
          <div key={i} className={cx('home__skill__chip')}>
            <img loading="lazy" src={skill.src} alt={skill.label} draggable={false} />
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
      <button className={cx('home__slider__btn')} onClick={() => scroll(1)}>
        <i className="uil uil-angle-right"></i>
      </button>
    </div>
  )
}

function TechStack() {
  const [activeTab, setActiveTab] = useState('web')

  return (
    <div className={cx('home__techStack')}>
      <div className={cx('home__techStack__heading')}>
        <h3>Toolkit</h3>
        <p>Technologies I use to ship reliable, scalable, and polished products.</p>
      </div>
      <div className={cx('home__techStack__Container')}>
        {/* Tab switcher */}
        <div className={cx('home__tabs')}>
          <button
            className={cx('home__tab', { 'home__tab--active': activeTab === 'web' })}
            onClick={() => setActiveTab('web')}
          >
            <i className="uil uil-globe"></i>
            Web
          </button>
          <button
            className={cx('home__tab', { 'home__tab--active': activeTab === 'ai' })}
            onClick={() => setActiveTab('ai')}
          >
            <i className="uil uil-robot"></i>
            Gen AI
          </button>
        </div>

        {/* Slider */}
        <SkillSlider skills={activeTab === 'web' ? webSkills : aiSkills} />
      </div>
    </div>
  )
}

export default TechStack
