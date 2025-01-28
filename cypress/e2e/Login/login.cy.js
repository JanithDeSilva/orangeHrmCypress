describe('OrangeCRM', ()=> {

    it('Login and Validate Title', ()=>{

        //visit the page
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath("//input[@name='username']").type("Admin")
        cy.xpath("//input[@name='password']").type("admin123")
        cy.xpath("//button[@type='submit']").click()
        //validate the text 'Dashboard' after login
        cy.xpath("//h6[normalize-space()='Dashboard']").should('have.text', 'Dashboard')


    })
})
