describe('Funcionalidades Foto, cenário incorreto', () => {
  
    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
      cy.getByData('loginUserName').type('smolakinho')
      cy.getByData('loginPassword').type('12345678')
      cy.getByData('loginBtn').click()
    })
  
    it('Deve retornar erro ao tentar cadastrar foto', () => {
      cy.get(':nth-child(2) > a > .fa').click()
      cy.get('[type="file"]').selectFile('images/teste.txt', {force:true})
      cy.get('[type="submit"]').click()
      cy.contains('Upload error!').should('be.visible') 
      cy.wait(2000) 

      cy.get(':nth-child(2) > a > .fa').click()
      cy.get('[type="file"]').selectFile('images/lapadaseca.jpeg', {force:true})
      cy.get('[placeholder="photo description"]').type('########################################################' +
             '##################################################################################################' +
             '##################################################################################################' +
             '##################################################################################################')
      cy.get('.text-danger').contains('Max length is 300')
      cy.get('.fa-home').click()

      cy.wait(2000) 
      cy.get(':nth-child(2) > a > .fa').click()
      cy.get('[placeholder="photo description"]').type('Imagem Top')
      cy.get('.text-danger').contains('Please, select a photo')
    })

  })