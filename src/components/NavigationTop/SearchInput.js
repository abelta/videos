import { useState } from 'react'

import { useBreakPoint } from 'hooks'

import IconSearch from './IconSearch'
import IconLeftArrow from './IconLeftArrow'

import Button from 'components/Button'

import './SearchInput.css'

const SearchInput = () => {
  const { isMobile } = useBreakPoint()
  const [isInputShowing, setIsInputShowing] = useState(false)

  return (
    <div className={`search ${isInputShowing && 'mobile-absolute'}`}>
      {isMobile && !isInputShowing &&
        <Button variant="clear" onClick={() => setIsInputShowing(true)}>
          <IconSearch />
        </Button>
      }
      {isMobile && isInputShowing &&
        <Button variant="clear" onClick={() => setIsInputShowing(false)}>
          <IconLeftArrow />
        </Button>
      }
      {(isMobile && isInputShowing) || !isMobile ?
        <div className='search-wrapper'>
          <div className='search-input'>
            <input className='input' />
          </div>
          <button className='search-button'>
            <IconSearch />
          </button>
        </div>
        : null
      }
    </div>
  )
}

export default SearchInput
