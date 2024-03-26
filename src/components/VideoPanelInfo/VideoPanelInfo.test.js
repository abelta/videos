import { render, screen, fireEvent } from '@testing-library/react'
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
    const userData = user()
    authorDetail = { ...userData, subscribers: userData.subscriberNumber }
  })

  describe('renders', () => {
    it('renders', () => {
      render(<VideoPanelInfo video={videoDetail} author={authorDetail} />)
      expect(screen.getByTestId('video-panel-info')).toBeInTheDocument()
    })

    it('show "...more" button', () => {
      render(<VideoPanelInfo video={videoDetail} author={authorDetail} />)
      expect(screen.getByText('...more').tagName).toBe('BUTTON')
    })

    it('contains video information', () => {
      render(<VideoPanelInfo video={videoDetail} author={authorDetail} />)
      expect(screen.getByText(`${videoDetail.views} views`)).toBeInTheDocument()
      expect(
        screen.getByText(formatDistanceToNow(videoDetail.timestamp)),
      ).toBeInTheDocument()
    })
  })

  describe('description button', () => {
    it('button "...more" is clicked and is changed to "show less"', () => {
      render(<VideoPanelInfo video={videoDetail} author={authorDetail} />)

      const moreButton = screen.getByText('...more')
      fireEvent.click(moreButton)
      expect(moreButton.textContent).toBe('Show less')
    })

    it('button "...more" is clicked twice and dont change', () => {
      render(<VideoPanelInfo video={videoDetail} author={authorDetail} />)

      const moreButton = screen.getByText('...more')
      fireEvent.click(moreButton)
      fireEvent.click(moreButton)
      expect(moreButton.textContent).toBe('...more')
    })
  })

  describe('the buttons of the extended description', () => {
    describe('videos button', () => {
      it('has width 400px if screen size is bigger  than 768px"', () => {
        window.innerWidth = 800
        fireEvent(window, new Event('resize'))
        render(<VideoPanelInfo video={videoDetail} author={authorDetail} />)

        const moreButton = screen.getByText('...more')
        fireEvent.click(moreButton)

        const btnVideos = screen.getByRole('button', { name: 'button-videos' })
        expect(btnVideos).toBeInTheDocument()
        expect(btnVideos).toHaveStyle('width: 400px')
      })

      it('has width 400px if screen size is smaller than 425px"', () => {
        window.innerWidth = 350
        fireEvent(window, new Event('resize'))

        render(<VideoPanelInfo video={videoDetail} author={authorDetail} />)

        const moreButton = screen.getByText('...more')
        fireEvent.click(moreButton)

        const btnVideos = screen.getByRole('button', { name: 'button-videos' })
        expect(btnVideos).toBeInTheDocument()
        expect(btnVideos).toHaveStyle('width: 138px')
      })

      it('changes colors onMouseEnter and onMouseLeave', () => {
        render(<VideoPanelInfo video={videoDetail} author={authorDetail} />)

        const moreButton = screen.getByText('...more')
        fireEvent.click(moreButton)

        const btnVideos = screen.getByRole('button', { name: 'button-videos' })

        fireEvent.mouseEnter(btnVideos)
        expect(btnVideos).toHaveStyle('background: #9b9b9b; color: black;')
        fireEvent.mouseLeave(btnVideos)
        expect(btnVideos).toHaveStyle('background:#dbdbdb; color:black')
      })
    })
    describe('about button', () => {
      it('changes colors onMouseEnter and onMouseLeave', () => {
        render(<VideoPanelInfo video={videoDetail} author={authorDetail} />)

        const moreButton = screen.getByText('...more')
        fireEvent.click(moreButton)

        const btnAbout = screen.getByRole('button', { name: 'button-about' })

        fireEvent.mouseEnter(btnAbout)
        expect(btnAbout).toHaveStyle('background: #9b9b9b; color: black;')
        fireEvent.mouseLeave(btnAbout)
        expect(btnAbout).toHaveStyle('background:#dbdbdb; color:black')
      })
    })
  })
})
