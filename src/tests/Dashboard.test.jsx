import { render } from "@testing-library/react"
import Dashboard from "../pages/dashboard"
import App from "../App"
import Post from "../components/post"
import Posts from "../components/posts"

describe("Dashboard", () => {
    let app
    let dashboard
    beforeEach(() => {
        dashboard = render(<Dashboard />)
        app = render(<App />)
    })
    test('the dashboard will render', () => {
        expect(dashboard).toBeInTheDocument()
    })
    test('posts will be rendered on the dashboard', () => {
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
})