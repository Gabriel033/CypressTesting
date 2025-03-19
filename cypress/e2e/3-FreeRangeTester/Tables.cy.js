describe('Dynamic and static tables', ()=>{

    it('Example of static tables', ()=>{
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1 > tbody > tr > td:nth-child(1)').each(($elem, index, $list) =>{
            const t = $elem.text();
            if(t.includes('Doe')){
                cy.get('#table1 > tbody > tr > td:nth-child(1)').eq(index).next().then(function(p){
                    const r = p.text()
                    expect(r).to.contains('Jason')
                })
            } 
        })
    })

    it('Example of dynamic tables', ()=>{
        cy.visit('https://chercher.tech/protractor/custom-webelement-dynamic-table-protractor')
        cy.contains('td', 'facebook.com').prev().find('input').check()
    })

    it('Example of static table 2', ()=>{
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.contains('td', 'Doe').next().should('have.text', 'Jason')
    })

})