import Link from '@docusaurus/Link'
import Translate, { translate } from '@docusaurus/Translate'
import useBrokenLinks from '@docusaurus/useBrokenLinks'
import Comment from '@site/src/components/Comment'
import collection from '@site/src/css/collection.module.css'
import BackToTopButton from '@theme/BackToTopButton'
import Layout from '@theme/Layout'
import MDXContent from '@theme/MDXContent'
import AboutContent from './_content.mdx'
import styles from './styles.module.css'

export default function About(): JSX.Element {
  useBrokenLinks().collectAnchor('about-comments')

  return (
    <Layout
      title={translate({ id: 'about.title', message: '自我介紹' })}
      description={translate({ id: 'about.description', message: 'Aris_QwQ的自我介紹' })}
    >
      <main className={collection.page}>
        <div className={`${collection.container} ${styles.container}`}>
          <header className={`${collection.header} ${styles.header}`}>
            <div>
              <p className={styles.eyebrow}><Translate id="about.label">關於我</Translate></p>
              <h1 className={collection.title}><Translate id="about.greeting">你好，我是Aris_QwQ。</Translate></h1>
              {/* <p className={collection.description}>
                <Translate id="about.identity">全網同名 Aris_QwQ（Aris）</Translate>
                <span className={styles.identitySeparator} aria-hidden="true"> · </span>
                <Translate id="about.avatar.intro">頭像是</Translate>
                {' '}
                <Link href="https://baike.baidu.com/item/%E9%85%B7%E4%B9%90/18058703" className={styles.inlineLink}>
                  <Translate id="about.avatar.name">酷樂</Translate>
                </Link>
              </p> */}
            </div>
            <img className={styles.avatar} src="/img/avatar.png" alt="" width="96" height="96" />
          </header>
          <div className={styles.layout}>
            <article className={styles.content}>
              <MDXContent><AboutContent /></MDXContent>
            </article>
            {/* <section id="about-comments" className={styles.comments} aria-labelledby="about-comments-title">
              <h2 id="about-comments-title"><Translate id="about.comments">聊兩句</Translate></h2>
              <p>感謝你能看到這裡，希望我的分享對你有幫助。如果你有什麼困擾，也可諮詢我，在我時間有限的情況下，我會竭力回覆。</p>
              <p className={styles.commentInvitation}>既然都看到這了，不妨留下你的評論。</p>
              <Comment />
            </section> */}
          </div>
        </div>
      </main>
      <BackToTopButton />
    </Layout>
  )
}
