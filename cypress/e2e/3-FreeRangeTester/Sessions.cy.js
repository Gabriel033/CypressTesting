describe('Sessions and Cookies', ()=>{

    it('Withouth session saved', ()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
        cy.url().should('contain', '/secure')
    })

    it('Session saved', ()=>{
        cy.session('Tom', ()=>{
            cy.visit('https://the-internet.herokuapp.com/login')
            cy.get('#username').type('tomsmith')
            cy.get('#password').type('SuperSecretPassword!')
            cy.get('.fa').click()
            cy.url().should('contain', '/secure')
            cy.getCookie('optimizelyPendingLogEvents').should('exist')
            cy.getCookie('optimizelyPendingLogEvents').should('not.be.null')
            cy.getCookies().should('have.length', 5).then((cookies)=>{
                expect(cookies[0]).to.have.property('name', 'optimizelyPendingLogEvents')
            })
            cy.getCookie('optimizelyPendingLogEvents').should('not.have.property', 'value', '%5B%22n%3Dhttps%253A%252F%252Fthe-internet.herokuapp.com%252Fsecure%26u%3Doeu1741983314455r0.5771833445308461%26wxhr%3Dtrue%26t%3D1741983315953%26f%3D298349752%2C318188263%22%2C%22n%3Dengagement%26g%3D298283957%26u%3Doeu1741983314455r0.5771833445308461%26wxhr%3Dtrue%26t%3D1741983314501%26f%3D298349752%2C318188263%22%2C%22n%3Dhttps%253A%252F%252Fthe-internet.herokuapp.com%252Flogin%26u%3Doeu1741983314455r0.5771833445308461%26wxhr%3Dtrue%26t%3D1741983314458%26f%3D298349752%2C318188263%22%5D')
            cy.clearCookie('optimizelyPendingLogEvents')
            cy.getCookie('optimizelyPendingLogEvents').should('not.exist')
            cy.clearCookies()
            cy.getCookies().should('have.length', 0)
            cy.setCookie('example', 'test')
            cy.getCookie('example').should('have.property', 'value', 'test')
        })
    })



})