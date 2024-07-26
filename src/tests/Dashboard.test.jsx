import { render } from "@testing-library/react"
import Dashboard from "../pages/dashboard"
import App from "../App"
import Post from "../components/post"
import Posts from "../components/posts"
import UserProfileIcon from "../components/UserProfileIcon"
import { CurrentUserContext } from "../context/currentUser"

describe("Dashboard", () => {
    let app
    let dashboard
    beforeEach(() => {
        dashboard = render(<Dashboard />)
        app = render(<App />)
    })
    it('will the dashboard will render', () => {
        expect(dashboard).toBeInTheDocument()
    })
    it('will be render posts on the dashboard', () => {
        const postComponent = render(<Post name={`${post.author.firstName} ${post.author.lastName}`} content={post.content}/>)
        const post = {
            content: "a new post",
            author : {
                firstName: 'user',
                lastName: 'new'
            }
        }
        expect(postComponent).toBeInTheDocument()
    })
    it('will display the users initials in the profile icon', () => {
        render(
            <CurrentUserContext value={'Current User'}>
                <UserProfileIcon />
            </CurrentUserContext>
        )
        const userName = screen.getByText('Current User')
        expect(userName).toBeInTheDocument()
    })
    it()
})