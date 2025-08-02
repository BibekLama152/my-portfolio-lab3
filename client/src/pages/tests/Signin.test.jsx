import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Signin from '../Signin'

describe('Signin Page', () => {
  it('renders sign in form fields', () => {
    render(
      <BrowserRouter>
        <Signin />
      </BrowserRouter>
    )

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })
})
