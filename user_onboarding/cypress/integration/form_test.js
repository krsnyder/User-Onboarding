describe('Form Testing', () => {
  // Refreshing browser to start test with fresh state
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  const nameInput = () => cy.get('input[name="name"]')
  const emailInput = () => cy.get('input[name="email"]')
  // const passwordInput = () => cy.get('input[name="password"]')
  const submitButton = () => cy.get('button[id="submit"]')
  const genreCheck = () => cy.get('input[type="checkbox"]')

  it('Testing Submit button', () => {
    submitButton()
      .should('be.disabled')
  })

  it('Testing Inputs', () => {
    nameInput()
      .type('Nardwuar the Human Serviette')
      .should('have.value', 'Nardwuar the Human Serviette')

    emailInput()
      .type('Nardwuar@Napkin.com')
      .should('have.value', 'Nardwuar@Napkin.com')
    
      // passwordInput()
      //   .type('N@rdyBoi420')
    
    genreCheck().check()

    // submitButton().click()

  })

  it('Form Validation', () => {
    nameInput().type("A")
    // Does the minimum name length error exist?
    cy.contains('at least 2 letters', { matchCase: false })
    nameInput().clear()
    cy.contains('tell us your name!', { matchCase: false })
    emailInput().type("Hello")
    cy.contains('snail mail', { matchCase: false })
    emailInput().clear()
    cy.contains('need that email', { matchCase: false })
  })
})