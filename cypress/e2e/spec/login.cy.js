describe('Login componet', () => {
    it('should open')
    it('should render the login component to allow users to login', () => {
        cy.get('.form > input').should('have.text', "")
    })
})