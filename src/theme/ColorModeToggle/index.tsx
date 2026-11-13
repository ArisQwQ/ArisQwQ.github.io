import clsx from 'clsx'
import useIsBrowser from '@docusaurus/useIsBrowser'
import IconDarkMode from '@theme/Icon/DarkMode'
import IconLightMode from '@theme/Icon/LightMode'
import React from 'react'
import styles from './styles.module.css'

type Props = {
  className?: string
  buttonClassName?: string
  value?: 'light' | 'dark'
  onChange?: (mode: 'light' | 'dark') => void
}

/**
 * 兩態切換：圖示反映「目前看到的樣子」，而不是「訪客的選擇」。
 * 圖示顯示由 CSS 依 html[data-theme] 決定，JS 未執行前也能正確顯示。
 */
export default function ColorModeToggle({
  className,
  buttonClassName,
  value,
  onChange,
}: Props): JSX.Element {
  const isBrowser = useIsBrowser()
  const label = value === 'dark' ? '切換到淺色模式（目前為深色）' : '切換到深色模式（目前為淺色）'

  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        className={clsx(
          'clean-btn',
          styles.toggleButton,
          !isBrowser && styles.toggleButtonDisabled,
          buttonClassName,
        )}
        type="button"
        onClick={() => onChange?.(value === 'dark' ? 'light' : 'dark')}
        disabled={!isBrowser}
        title={label}
        aria-label={label}>
        <IconLightMode aria-hidden="true" className={clsx(styles.toggleIcon, styles.sunIcon)} />
        <IconDarkMode aria-hidden="true" className={clsx(styles.toggleIcon, styles.moonIcon)} />
      </button>
    </div>
  )
}
