import { render } from "@testing-library/react"
import Button from "../components/button"
import Login from "../pages/login"
import { login } from "../service/apiClient"
import { act } from "react"
import App from "../App"

describe("Login", () => {
    let app
    let loginForm
    beforeEach(() => {
        app = render(<App />)
        loginForm = render(<Login />)
    })
    test('the login form will render', () => {
        expect(loginForm).toBeInTheDocument()
    })
    test('a users login request will be sent to the API', async () => {
        const mockRequest = {
            email: 'testuser@boolean.com',
            password: 'Password1!'
        }
        const { email, password } = mockRequest
        await expect(login(email, password)).toHaveBeenCalled()
    })
    test('an error will be displayed if a user is unsuccessful in logging in', () => {
        const button = render(<Button />)
        act(() => {
            button.getByPlaceholderText('Log in')
        })
        expect(loginForm.findByText('Login failed'))
    })
})
