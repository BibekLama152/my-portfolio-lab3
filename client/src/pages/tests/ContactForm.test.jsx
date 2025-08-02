// client/src/pages/tests/ContactForm.test.jsx

import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ContactForm from '../ContactForm'
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'

// 1) Mock auth-helper default export
vi.mock('../../auth/auth-helper', () => ({
  default: {
    isAuthenticated: () => ({ token: 'fake-token' }),
  },
}))

describe('ContactForm', () => {
  beforeEach(() => {
    // 2) Stub global.fetch and window.alert
    global.fetch = vi.fn()
    vi.spyOn(window, 'alert').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
    delete global.fetch
  })

  it('renders Name, Email, Message inputs and a Submit button', () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /submit/i })
    ).toBeInTheDocument()
  })

  it('submits the form and calls fetch with the correct payload', async () => {
    // simulate a successful POST
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    })

    render(<ContactForm />)

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'Alice' }
    })
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'alice@example.com' }
    })
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Hello there!' }
    })

    fireEvent.click(screen.getByRole('button', { name: /submit/i }))

    // wait for your fetch side-effect
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1)
    })

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/contacts',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          'Content-Type': 'application/json',
          Authorization: 'Bearer fake-token'
        }),
        body: JSON.stringify({
          name: 'Alice',
          email: 'alice@example.com',
          message: 'Hello there!'
        })
      })
    )
  })
})
