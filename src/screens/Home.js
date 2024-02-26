import { TagsMenu, VideosList } from 'components'

const Home = () => {
  return (
    <>
      <TagsMenu />
      <VideosList
        style={{ backgroundColor: 'lightgrey', height: '100%', width: '100%' }}
      />
    </>
  )
}

export default Home
