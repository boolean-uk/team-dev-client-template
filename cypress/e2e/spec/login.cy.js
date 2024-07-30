//before running tests - ensure the localhost is running locally

describe('Login/Register componet', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })
    it('should open the login component in the correct pathway', () => {
        cy.get('.login-form > form')
        cy.location('pathname').should('include', 'login')
    })
    it('should render the login component to allow users to login', () => {
        cy.get('.login-form > form').should('have.text', 'Email *Password *')
    })
    it('should redirect the user to the register page if a new user', () => {
        cy.get('.credentials-altbutton').contains('Sign up')
          .click()

        cy.url()
          .should('equal', 'http://localhost:3000/register')
    })
    it('should send a POST/login request when an existing user logs in', () => {
        cy.intercept({
            headers: {
                'Content-Type': 'application/json',
              },
            method: 'POST',
            url: 'http://localhost:4000/login'
        }).as('login')
    })
    it('should send a POST/users request to create a new user', () =>  {
        cy.intercept({
            headers: {
                'Content-Type': 'application/json',
              },
            method: 'POST',
            url: 'http://localhost:4000/users'
        }).as('signUp')
    })
    it('should show an error message if an email/password is not entered in registration form', () => {
        cy.visit('http://localhost:3000/register')
        cy.get('.register-form > button').should('have.text', 'Sign up')
          .click()
        cy.get('.register-form > p').should('have.text', 'Email is required')
    })
    it('should show an error message if an email/password is not entered in login form', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('.login-form > button').should('have.text', 'Log in')
          .click()
        cy.get('.login-form > p').should('have.text', 'The email or password is incorrect')
    })
})