describe('API Test reqres', () => {
    
    const baseUrl = 'https://reqres.in/api';

    it('Get user details', () => {

        cy.request(`${baseUrl}/users?page=2`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data')
            expect(response.body.data).to.be.an('array')
        })

    })

    it('create new user', () => {

        cy.request('POST',`${baseUrl}/users`,{
            name: 'Kohn oee',
            job: 'Software Engineer'
        }).then((response)=>{
            expect(response.status).to.eq(201)
            cy.log(JSON.stringify(response))
        })

    })

    it('put - update an existing user', () => {

        cy.request('PUT',`${baseUrl}/users/2 `,{
            name: 'John Doe',
            job: 'Software QA Engineer'
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', 'John Doe')
            expect(response.body).to.have.property('job', 'Software QA Engineer')
            cy.log(JSON.stringify(response))
        })

    })

    it('delete - delete an existing user', () => {

        cy.request('DELETE',`${baseUrl}/users/2 `)
        .then((response)=>{
            expect(response.status).to.eq(204 )
            cy.log(JSON.stringify(response))
        })

    })
})