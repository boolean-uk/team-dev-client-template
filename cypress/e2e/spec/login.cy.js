describe('Login componet', () => {
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
    it('should redirect the user to the vericication page if a new user', () => {
        cy.get('.bg-blue login credentialpage')
        cy.get('button').contains('Sign up')
          .click()

        cy.url()
          .should('equal', 'http://localhost:3000/verification')
    })
})