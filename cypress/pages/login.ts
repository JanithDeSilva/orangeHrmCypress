import { homeDashboard } from "../pages/homeDashboard"

export class orangeLogin{
    
    private txt_username = "//input[@name='username']";
    private txt_password = "//input[@name='password']";
    private btn_login = "//button[@type='submit']";
    private lbl_dashboard="//h6[normalize-space()='Dashboard']";

    public visitUrl(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 
        return this;
    }

    public step_enterUsername(username:string){
        cy.xpath(this.txt_username).type(username)
        return this;
    }
    public step_enterPassword(password:string){
        cy.xpath(this.txt_password).type(password)
        return this;
    }
    public step_clickLogin(){
        cy.xpath(this.btn_login).click()
        cy.wait(5000)
        return new homeDashboard();
    }
    public step_verifyDashboardHeaderText(text:string){
        cy.xpath(this.lbl_dashboard).should('have.text', text)
        return this;
    }

    public step_Login(){
        this.visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123")
        .step_clickLogin()
        return new homeDashboard();

    }


}