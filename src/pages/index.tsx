import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import BlogSection from '../components/landing/BlogSection'
import Hero from '../components/landing/Hero'
import styles from './index.module.css'

export default function Home() {
  const {
    siteConfig: { customFields, tagline },
  } = useDocusaurusContext()
  const { description } = customFields as { description: string }

  return (
    <Layout title={tagline} description={description}>
      <main className={styles.home}>
        <Hero />

        <div className="relative">
          <div className="mx-auto max-w-7xl pb-12 lg:px-8">
            <BlogSection />
          </div>
        </div>
      </main>
    </Layout>
  )
}
