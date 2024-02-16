import { useState, useEffect } from 'react'

const useBreakPoint = () => {
  const [breakPoints, setBreakPoints] = useState({
    isMobile: false,
    isMobileLarge: false
  })

  useEffect(() => {
    const handleResize = () => {
      setBreakPoints({
        mobile: window.innerWidth < 425,
        mobileLarge: window.innerWidth >= 425 && window.innerWidth < 768
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)

  }, [])

  return {
    isMobile: breakPoints.mobile,
    isMobileLarge: breakPoints.mobileLarge
  }
}

export default useBreakPoint