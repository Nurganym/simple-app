import { fireEvent, getByText, render, screen } from '@testing-library/react'
import Login from '../Login'

describe('Test Login component', () => {
  test('submits username and password', () => {
    const username = 'admin'
    const password = '12345'
    const mockLogin = jest.fn()

    render(<Login onSubmit={mockLogin(username, password)} />)
  })
})
