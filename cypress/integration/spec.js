describe('Template store app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const getStore = () => cy.window().its('username')

  it('starts with "world"', () => {
    cy.contains('h1', 'Hello world!')
  })

  it('contains greeting', () => {
    cy.contains("It's nice to see you, world.")
  })

  it('can change name', () => {
    getStore().then(store => {
      store.set('Cypress')
    })
    cy.contains('h1', 'Hello Cypress!')
  })

	it('uses localStorage as backup', () => {
    getStore().then(store => {
      store.set('Cypress')
    })
    const serialized = JSON.stringify('Cypress')
    cy
      .window()
      .its('localStorage.username')
      .should('equal', serialized)
  })
})

it('reads store from localStorage on load', () => {
  cy.visit('/', {
    onBeforeLoad: win => {
      const serialized = JSON.stringify('Local User')
      win.localStorage.setItem('username', serialized)
    },
  })

  cy.contains('h1', 'Hello Local User!')
})
