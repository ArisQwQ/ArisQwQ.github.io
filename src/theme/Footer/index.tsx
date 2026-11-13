import Link from '@docusaurus/Link'
import IconExternalLink from '@theme/Icon/ExternalLink'
import social from '@site/data/social'
import { getPoliceRecordCode, siteInfo } from '@site/data/site'
import styles from './styles.module.css'

type FooterLink = {
  label: string
  href?: string
  showExternalIcon?: boolean
  to?: string
}

const currentYear = new Date().getFullYear()

const linkGroups: Array<{ title: string, links: FooterLink[] }> = [
  {
    title: '關於',
    links: [
      { label: '首頁', to: '/' },
      { label: '關於我', to: '/about' },
    ],
  },
  {
    title: '更多',
    links: [
      { label: '歸檔', to: '/blog/archive' },
      { label: '友鏈', to: '/friends' },
    ],
  },
  {
    title: '聯繫',
    links: [
      { label: 'GitHub', href: social.github.href },
      { label: '發郵件', href: social.email.href },
    ],
  },
]

const hasBeian = Boolean(siteInfo.beian.icp || siteInfo.beian.police)

function FooterAnchor({ link }: { link: FooterLink }): JSX.Element {
  const showExternalIcon = link.showExternalIcon ?? Boolean(link.href?.startsWith('http'))
  const linkProps = link.href ? { href: link.href } : { to: link.to }

  return (
    <Link {...linkProps} className={styles.link}>
      {link.label}
      {showExternalIcon && <IconExternalLink className={styles.externalIcon} />}
    </Link>
  )
}

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <section className={styles.brand} aria-label="站點信息">
            <h2 className={styles.title}>{siteInfo.name}</h2>
            <p className={styles.description}>{siteInfo.description}</p>
            <p className={styles.copyright}>
              <span>
                {`© ${siteInfo.copyrightStartYear}-${currentYear} ${siteInfo.name}`}
              </span>
              <br />
              <span>
                Powered by
                {' '}
                <Link href="https://docusaurus.io">Docusaurus</Link>
              </span>
            </p>
          </section>

          <nav className={styles.groups} aria-label="頁腳導航">
            {linkGroups.map(group => (
              <section key={group.title} className={styles.group}>
                <h3 className={styles.groupTitle}>{group.title}</h3>
                <ul className={styles.groupList}>
                  {group.links.map(link => (
                    <li key={link.label}>
                      <FooterAnchor link={link} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </div>

        {hasBeian && (
          <div className={styles.bottom}>
            <div className={styles.records}>
              {siteInfo.beian.icp && (
                <Link href="http://beian.miit.gov.cn/">{siteInfo.beian.icp}</Link>
              )}
              {siteInfo.beian.icp && siteInfo.beian.police && (
                <span className={styles.recordDivider} aria-hidden="true">·</span>
              )}
              {siteInfo.beian.police && (
                <Link href={`http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${getPoliceRecordCode()}`}>
                  {siteInfo.beian.police}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}
