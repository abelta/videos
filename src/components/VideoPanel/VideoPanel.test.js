import { render, screen, userEvent } from '@testing-library/react'
import { VideoPanel } from 'components'
import { user } from 'mocks'

jest.mock('lottie-react', () => ({
  Lottie: jest.fn(),
}))

describe.skip('VideoPanel', () => {
  const userData = user()
  const dataMock = {
    authorDetail: { ...userData, subscribers: userData.subscriberNumber },
    thumbnail: 'https://picsum.photos/339/191?0.4428504507989466',
    style: { padding: '16px' },
    title: 'title',
    like: 222,
  }

  it('renders', async () => {
    render(
      <VideoPanel
        thumbnail={dataMock.thumbnail}
        style={dataMock.style}
        author={dataMock.authorDetail}
        title={dataMock.title}
        likes={dataMock.like}
      />,
    )

    // const suscribeButton = screen.getByLabelText('button-suscribe')
    const suscribeButton = screen.getByRole('button', {
      name: 'button-suscribe',
    })

    expect(suscribeButton).toBeInTheDocument()
    screen.debug()
    userEvent.click(suscribeButton)
  })
})
