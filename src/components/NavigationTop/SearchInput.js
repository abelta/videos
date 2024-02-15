import { useState } from 'react'

import { useMediaQuery } from 'hooks'

import IconSearch from './IconSearch'
import IconLeftArrow from './IconLeftArrow'

import Button from 'components/Button'

import './SearchInput.css'

const SearchInput = () => {
  const isMobile = useMediaQuery('(max-width:768px)')
  const [showSearchInput, setShowSearchInput] = useState(false)

  return (
    <div className={`search ${showSearchInput ? 'mobile-absolute' : ''}`}>
      {isMobile && !showSearchInput &&
        <Button variant="icon" onClick={() => setShowSearchInput(true)}>
          <IconSearch />
        </Button>
      }
      {isMobile && showSearchInput &&
        <Button variant="icon" onClick={() => setShowSearchInput(false)}>
          <IconLeftArrow />
        </Button>
      }
      {(isMobile && showSearchInput) || !isMobile ?
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
