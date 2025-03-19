describe('API Testing with Cypress', ()=>{

    it('The "posts" endpoint response obtained a 200 status code', ()=>{
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts'
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })

    })

    it('The "posts" endpoint response has a length of 100', ()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.request('/posts').its('body').should('have.length', 100)

    })

    it('The "posts/1" endpoint has the title "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"', ()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.request('/posts/1').its('body').should('have.property', 'title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })

    it('The POST request works correctly for the endpoint', ()=>{
        cy.request('POST','https://jsonplaceholder.typicode.com/posts',{
            userId: 1,
            id: 101,
            title: "Test Automation",
            body: "Using Cypress for API Testing"
        }).then((response)=>{
            expect(response.body).to.have.property('title','Test Automation')
        })
    })

    it('The PUT requests works correctly for the endpoint', ()=>{
        cy.request('PUT','https://jsonplaceholder.typicode.com/posts/2',{
            title: "Test Automation PUT Request",
            body: "Using Cypress for API Testing"
        }).then((response)=>{
            expect(response.body).to.have.property('title','Test Automation PUT Request')
        })
    })

})