import React, { useState, useEffect } from 'react'

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    // 清理函數，在組件卸載時移除事件監聽
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // 空數組作為第二個參數，只在組件掛載和卸載時執行一次

  return windowSize
}
