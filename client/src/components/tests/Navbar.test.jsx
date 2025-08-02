import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../Navbar'

describe('Navbar', () => {
  it('renders links correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/sign in/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  })
})
