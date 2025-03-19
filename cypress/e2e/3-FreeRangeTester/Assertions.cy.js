describe('Implicit and explicit validations and promises', ()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/')
    })

    it('Example for implicit validations', ()=>{
        cy.contains('Inputs').click()
        cy.get('h3').should('have.text', 'Inputs')
        cy.get('.example').should('have.class', 'example').and('be.visible')
    })

    it('Example for explicit validations', ()=>{
        cy.contains('Inputs').click()
        cy.get('h3')
        expect('Inputs').to.equals('Inputs')
    })

    it('Wait until the promise is solved', ()=>{
        let waited = false
        function waitOneSecond() {
            // return a promise when it is solved after 1 second
            return new Cypress.Promise((resolve, reject) =>{
                setTimeout(() => {
                    waited = true
                    resolve('foo')
                }, 1000)
            })
        }
        
        cy.wrap(null).then(() => {
            // return a promise to cy.then that is waited until this is solved
            return waitOneSecond().then((str) => {
                expect(str.to.eq('foo'))
                expect(waited.to.true)
            })
        })

    })

})