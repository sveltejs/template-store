describe('Template store app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const getStore = () => cy.window().its('app.store')

  it('starts with "world"', () => {
    cy.contains('h1', 'Hello world!')
  })

  it('contains greeting', () => {
    cy.contains("It's nice to see you, world.")
  })

  it('can change name', () => {
    getStore().then(store => {
      store.set({ name: 'Cypress' })
    })
    cy.contains('h1', 'Hello Cypress!')
  })

  it('uses localStorage as backup', () => {
    getStore().then(store => {
      store.set({ name: 'Cypress' })
    })
    const serialized = JSON.stringify({
      name: 'Cypress',
    })
    cy
      .window()
      .its('localStorage.my-app')
      .should('equal', serialized)
  })
})

it('reads store from localStorage on load', () => {
  cy.visit('/', {
    onBeforeLoad: win => {
      const serialized = JSON.stringify({
        name: 'Local User',
      })
      win.localStorage.setItem('my-app', serialized)
    },
  })

  cy.contains('h1', 'Hello Local User!')
})
