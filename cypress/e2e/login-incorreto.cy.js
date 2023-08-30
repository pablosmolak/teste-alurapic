describe('Pagina de login, cenário incorreto', () => {
  
    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
  
    it('Deve verificar as mensagem de dados obrigatórios no login', () => {
      cy.getByData('loginUserName').type('smolakinho45')
      cy.getByData('loginPassword').type('12')
      cy.getByData('loginBtn').click()
      cy.on('window:alert',(msg) => {
            expect(msg).to.equals('Invalid user name or password')
      })
      cy.get(':nth-child(1) > ap-vmessage > .text-danger').contains('User name is required!')
      cy.get(':nth-child(2) > ap-vmessage > .text-danger').contains('Password is required!')
    })
  })