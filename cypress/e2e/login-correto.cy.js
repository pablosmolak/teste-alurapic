describe('Pagina de login, cenário de sucesso', () => {
  
  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
  })

  it('Deve realizar login com sucesso', () => {
    cy.getByData('loginUserName').type('smolakinho')
    cy.getByData('loginPassword').type('12345678')
    cy.getByData('loginBtn').click()
  })
})