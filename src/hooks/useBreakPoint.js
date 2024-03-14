import { useState, useEffect } from 'react'

const useBreakPoint = () => {
  const [breakPoints, setBreakPoints] = useState({
    isMobile: false,
    isMobileLarge: false,
  })

  useEffect(() => {
    const handleResize = () => {
      setBreakPoints({
        isMobile: window.innerWidth < 425,
        isMobileLarge: window.innerWidth >= 425 && window.innerWidth < 768,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    isMobile: breakPoints.isMobile,
    isMobileLarge: breakPoints.isMobileLarge,
  }
}

export default useBreakPoint
