import { TagsMenu, VideosList } from 'components'

const Home = () => {
  return (
    <div style={{ height: '100%' }}>
      <TagsMenu
        style={{
          marginBottom: '20px',
          position: 'absolute',
          display: 'flex',
          backgroundColor: 'white',
          zIndex: 1,
          width: '100%',
          lexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40px',
        }}
      />
      <VideosList
        style={{
          top: '70px',
          height: 'calc(100% - 60px)',
          width: '100%',
          position: 'relative',
          overflowY: 'scroll',
        }}
      />
    </div>
  )
}

export default Home
