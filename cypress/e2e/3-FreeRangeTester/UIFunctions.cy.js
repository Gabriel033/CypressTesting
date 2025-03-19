describe('Main actions that can interact with the UI', ()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Example for doing click in buttons', ()=>{
        cy.contains('Add/Remove Elements').click()
        cy.get('button').click()
        cy.get('.added-manually').click()
    })

    it('Example for typing in a inputtext', ()=>{
        cy.contains('Form Authentication').click()
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
    })

    it('Example for checkboxes', ()=>{
        cy.contains('Checkboxes').click()
        cy.get('#checkboxes > :nth-child(1)').check()
        cy.get('#checkboxes > :nth-child(3)').uncheck()
    })

    it('Example for dropdown', ()=>{
        cy.contains('Dropdown').click()
        cy.get('#dropdown').select(1)
        cy.get('#dropdown').select("Option 2")

    })

    it('Example for clear', ()=>{
        cy.contains('Form Authentication').click()
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('#username').clear()
        cy.get('#password').clear()
    })

    it('Example for mouse hover', ()=>{
        cy.contains('Hovers').click()
        cy.get('#content > div > div:nth-child(4) > div > a').click({force: true})
    })

    it('Example for mouse hover and validate visibility', ()=>{
        cy.contains('Hovers').click()
        cy.get('#content > div > div:nth-child(4) > div > a').invoke("show").click({force: true})
    })

    it('Example for alerts', ()=>{
        cy.contains('Context Menu').click()
        cy.get('#hot-spot').rightclick() //alert invoked with this particular functionality of rightClick
        //cy.get('#hot-spot').invoke("trigger","contextmenu") // this is to display the alert without do the rightClick
        cy.on("window:alert",(alert)=>{
            expect(alert).to.equal("You selected a context menu")
        })
    })

})