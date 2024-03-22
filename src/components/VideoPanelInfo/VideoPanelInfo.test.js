import { render, screen } from '@testing-library/react'
import { formatDistanceToNow } from 'date-fns'
import { user, video } from 'mocks'
import { VideoPanelInfo } from 'components'

jest.mock('lottie-react', () => ({
  Lottie: jest.fn(),
}))

describe('VideoPanelInfo', () => {
  let videoDetail
  let authorDetail

  beforeEach(() => {
    videoDetail = video()
    const u = user()
    authorDetail = { ...u, subscribers: u.subscriberNumber }
  })

  describe('renders', () => {
    it('renders', () => {
      render(<VideoPanelInfo video={videoDetail} author={authorDetail} />)
      expect(screen.getByTestId('video-panel-info')).toBeInTheDocument()
    })

    it('contains video information', () => {
      render(<VideoPanelInfo video={videoDetail} author={authorDetail} />)
      expect(screen.getByText(`${videoDetail.views} views`)).toBeInTheDocument()
      expect(
        screen.getByText(formatDistanceToNow(videoDetail.timestamp)),
      ).toBeInTheDocument()
    })

    it.skip('contains author information', () => {})
  })

  describe.skip('open button', () => {
    describe('is clicked once', () => {
      it.skip('opens panel', () => {})
    })

    describe('is clicked twice', () => {
      it.skip('closes panel', () => {})
    })
  })
})
