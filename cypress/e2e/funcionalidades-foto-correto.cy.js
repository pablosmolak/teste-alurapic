describe('Funcionalidades Foto, cenário de sucesso', () => {
  
    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
  
    it('Deve realizar cadastro com sucesso', () => {
      cy.getByData('loginUserName').type('smolakinho')
      cy.getByData('loginPassword').type('12345678')
      cy.getByData('loginBtn').click()
      cy.get(':nth-child(2) > a > .fa').click()
      cy.get('[type="file"]').selectFile('images/lapadaseca.jpeg', {force:true})
      cy.get('[placeholder="photo description"]').type('Lapada seca')
      cy.get('[type="submit"]').click()
      cy.contains('Upload complete').should('be.visible')
      cy.get('.fa-home').click()
      cy.get('.img-thumbnail').should('have.length',1)
      
    })
  })