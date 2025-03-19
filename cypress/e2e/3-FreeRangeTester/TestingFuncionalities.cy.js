describe('Demonstrate some useful functionalities', ()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Example for multiple windows functionality', ()=>{
        cy.contains('Multiple Windows').click()
        cy.contains('Click Here').invoke('removeAttr', 'target').click()
        cy.contains('New Window').should('have.text', 'New Window')
    })

    /*it('Example for ShadowDOM functionality', ()=>{
        cy.contains('Shadow DOM').click()
        cy.get('span').shadow().should('have.text', '')
    })
    */
    
    it('Example for dynamic elements', ()=>{
        cy.contains('Dynamic Content').click()
        cy.get('img').first().should('be.visible')
        cy.get('img').last().should('be.visible')
        cy.get('img').eq(2).should('be.visible')
    })

    it('Example for parent and children elements', ()=>{
        cy.contains('Dynamic Content').click()
        cy.get(':nth-child(4) > .large-2 > img').parent().should('be.visible')
        cy.get('.example > :nth-child(7)').children().should('be.visible')
    })

    it('Example for invoke function', ()=>{
        cy.contains('Dynamic Content')
        //.should('be.hidden')
        .invoke('show')
        .should('be.visible')
    })

})