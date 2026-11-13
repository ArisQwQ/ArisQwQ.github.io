import { SkipToContentLink } from '@docusaurus/theme-common'
import React from 'react'

import styles from './styles.module.css'

// Docusaurus 自带的 zh-Hant 翻译里这条是无障碍跳转文案，原文仍是简体
// 「跳至主要内容」，这里覆盖成繁体。
export default function SkipToContent() {
  return (
    <SkipToContentLink className={styles.skipToContent} aria-label="跳至主要內容">
      跳至主要內容
    </SkipToContentLink>
  )
}
