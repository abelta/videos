import { useState } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { useTags } from 'hooks'
import { Pill, Button } from 'components'

const TagsMenu = ({ style }) => {
  const OFFSET_WIDTH = 200

  const { data: tags } = useTags()
  const [x, setX] = useState(0)
  const { ref: refFirst, inView: inViewFirst } = useInView()
  const { ref: refLast, inView: inViewLast } = useInView()

  return (
    <div style={{ overflow: 'hidden', ...style }}>
      <span
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
          height: '100%',
          width: '100px',
          position: 'absolute',
          paddingLeft: '10px',
          display: inViewFirst ? 'none' : 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSize: '18px',
            lineHeight: '20px',
            fontWeight: 'bold',
            height: '40px',
            width: '40px',
          }}
          onClick={() => {
            setX(x + OFFSET_WIDTH)
          }}
        >
          &lt;
        </Button>
      </span>
      <nav
        style={{
          width: '100%',
          padding: '10px',
          display: 'flex',
          flexDirection: 'row',
          columnGap: '20px',
          position: 'relative',
          left: `${x}px`,
          transition: 'all 0.2s',
        }}
      >
        <span ref={refFirst} style={{ width: '1px', height: '1px' }} />
        {tags?.map(({ id, name }) => (
          <Pill key={id}>{name}</Pill>
        ))}
        <span ref={refLast} style={{ width: '1px', height: '1px' }} />
      </nav>
      <span
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
          height: '100%',
          width: '100px',
          position: 'absolute',
          paddingRight: '10px',
          display: inViewLast ? 'none' : 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          top: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <Button
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Roboto, Arial, sans-serif',
            fontSize: '18px',
            lineHeight: '20px',
            fontWeight: 'bold',
            height: '40px',
            width: '40px',
          }}
          onClick={() => {
            setX(x - OFFSET_WIDTH)
          }}
        >
          &gt;
        </Button>
      </span>
    </div>
  )
}

TagsMenu.propTypes = {
  style: PropTypes.object,
}

export default TagsMenu
