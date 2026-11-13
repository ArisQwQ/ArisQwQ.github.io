import { type Variants, motion, useReducedMotion } from 'motion/react'

import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'

import SocialLinks from '@site/src/components/SocialLinks'
import styles from './styles.module.css'

const variants: Variants = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.1,
    },
  }),
  hidden: { opacity: 0, y: 30 },
}

function Name() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.h1
      id="hero-title"
      className={styles.hero_text}
      custom={1}
      initial={reduceMotion ? false : 'hidden'}
      animate="visible"
      variants={variants}
    >
      <Translate id="homepage.hero.greet">你好! 我是</Translate>
      <span className={styles.name}>
        <Translate id="homepage.hero.name"> Aris_QwQ</Translate>
      </span>
    </motion.h1>
  )
}

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const avatar = useBaseUrl('/img/avatar.png')

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.intro}>
        <img className={styles.avatar} src={avatar} width={100} height={100} alt="" />
        <Name />
        <motion.p custom={2} initial={reduceMotion ? false : 'hidden'} animate="visible" variants={variants}>
          <Translate id="homepage.hero.text">
            一隻 OIer，但是沒有什麼出息。
          </Translate>
        </motion.p>
        <motion.div className={styles.socials} custom={3} initial={reduceMotion ? false : 'hidden'} animate="visible" variants={variants}>
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  )
}
