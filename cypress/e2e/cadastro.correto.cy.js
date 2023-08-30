describe('Pagina de cadastro, cenário de cadastro com sucesso', () => {
  
    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
  
    it('Deve realizar cadastro com sucesso', () => {
      cy.getByData('register').click()
      cy.getByData('email').type('smolakinho@gmail.com')
      cy.getByData('fullName').type('smolakinho')
      cy.getByData('registerUserName').type('smolakinho111')
      cy.getByData('registerPassword').type('12345678')
      cy.getByData('btnRegister').click()
    })
  })