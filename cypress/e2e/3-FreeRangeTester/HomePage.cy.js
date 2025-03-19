describe('Home de www.freerangetesters.com', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.freerangetesters.com/')
    })

    it('should have a title', () => {
        cy.title().should('include', 'Free Range Testers')
        cy.log("After title validation")
    })

    it('In the course section, it should be 11 buttons with the text "ver más"', ()=>{
        cy.xpath('//*[@id="page_header"]/div/section/div/header/nav/ul/li[1]/a').click()
        //cy.contains('Acceder')
        cy.log("Starting validation to check the number of buttons...")
        cy.get('.sc-fEOKFM > :nth-child(3) > .sc-dJkDXt').should('have.length', 11)
    })

    it('In the form, the inputtext Nombre should have the class "sc-jdabBK jjJSyU"', ()=>{
        cy.log("Validation of the form...")
        cy.get('#email-form-name').debug().should('have.class', 'sc-jdabBK jjJSyU')
    })
    
    it('Validate that the Blog menu is available at the top of the page', ()=>{
        cy.log("Checking the menu at the top of the page")
        cy.get('[data-testid="header-container"] > .sc-cOTGOU > .sc-cSaEAk > :nth-child(3) > .sc-hORkcV').should('have.text', 'Blog')
    })

    it('the button "Registrarse" should be available in the page', ()=>{
        cy.get('[data-react-component="creator_ui/section_adapters/Newsletter"] > .sc-dVBluf > [data-testid="container"] > .sc-gOUBbZ > .sc-loYsQo > .sc-fEOKFM > .sc-fXqexe > .sc-kDeqfd > .sc-edctFj > .sc-dJkDXt').as('RegisterButton')
        cy.get('@RegisterButton').should("be.visible")
        cy.log("The execution finished...")
    })
    

})