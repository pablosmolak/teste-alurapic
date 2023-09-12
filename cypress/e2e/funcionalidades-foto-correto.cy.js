describe('Funcionalidades Foto, cenário de sucesso', () => {
  
    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
  
    it('Deve cadastrar com sucesso uma foto', () => {
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

    it('Deve dar like e comentar na foto', () => {
      cy.getByData('loginUserName').type('smolakinho')
      cy.getByData('loginPassword').type('12345678')
      cy.getByData('loginBtn').click()
      cy.get('.img-thumbnail').first().click()
      cy.get('.fa-heart-o').click()
      cy.wait(1000)
      cy.get('[formcontrolname="comment"]').type('Lapada atrás de lapada ein')
      cy.get('[type="submit"]').click()
      cy.wait(2000)
      cy.get('.fa-home').click()
      
    })

    it('Deve Remover uma foto com sucesso', () => {
      cy.getByData('loginUserName').type('smolakinho')
      cy.getByData('loginPassword').type('12345678')
      cy.getByData('loginBtn').click()
      cy.get('.img-thumbnail').first().click()
      cy.wait(2000)
      cy.get('.fa-trash-o').click()
      cy.contains('Photo removed').should('be.visible')
    })

    it('Deve Pesquisar uma foto entre duas opções', () => {
      cy.getByData('loginUserName').type('smolakinho')
      cy.getByData('loginPassword').type('12345678')
      cy.getByData('loginBtn').click()

      /*Adicionando a primeira imagem*/
      cy.get(':nth-child(2) > a > .fa').click()
      cy.get('[type="file"]').selectFile('images/radiacao.jpeg', {force:true})
      cy.get('[placeholder="photo description"]').type('É cesio mesmo')
      cy.get('[type="submit"]').click()
      cy.contains('Upload complete').should('be.visible')
      cy.wait(2000)

      /*Adicionando a segunda imagem*/
      cy.get(':nth-child(2) > a > .fa').click()
      cy.get('[type="file"]').selectFile('images/lapadaseca.jpeg', {force:true})
      cy.get('[placeholder="photo description"]').type('Lapada seca')
      cy.get('[type="submit"]').click()
      cy.contains('Upload complete').should('be.visible')

      /*primeira pesquisa*/
      cy.get('[type="search"]').type('lapada')
      cy.wait(1000)
      cy.get('.img-thumbnail').first().click()
      cy.get('[class="text-left break-word"]').contains('Lapada')
      cy.wait(1000)
      cy.get('.fa-home').click()

      /*segunda pesquisa*/
      cy.get('[type="search"]').type('cesio')
      cy.wait(1000)
      cy.get('.img-thumbnail').first().click()
      cy.get('[class="text-left break-word"]').contains('cesio')
      cy.wait(1000)
      cy.get('.fa-home').click()
      
      /*para apagar as imagens adicionadas no banco*/
      cy.wait(2000)
      cy.get('.img-thumbnail').first().click()
      cy.get('.fa-trash-o').click()
      cy.wait(1000)
      cy.get('.img-thumbnail').first().click()
      cy.get('.fa-trash-o').click()
    })

  })