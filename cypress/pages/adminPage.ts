import { leftPanel } from "./panel/leftPanel"

export class adminPage {

    private sidePanel;

    private lbl_header = "//h6[normalize-space()='Admin']"
    private txt_userName = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']"
    private select_dropDown = "(//div[contains(text(),'-- Select --')])[1]"
    private select_adminOption = ".oxd-select-dropdown .oxd-select-option"
    private btn_search = "//button[@type='submit']"



    constructor(){
        this.sidePanel = new leftPanel
    }

    public step_verifyHeaderText(){
        cy.xpath(this.lbl_header).should('have.text', 'Admin')
        return this;
    }

    public step_typeUserName(name:string){
        cy.xpath(this.txt_userName).type(name)
        return this;
    }

    public step_selectRole(name:string){
        cy.xpath(this.select_dropDown).click()
        cy.wait(3000)
        cy.get(this.select_adminOption).contains(name).click()
        return this;
    }

    public step_clickSubmit(){
        cy.xpath(this.btn_search).click()
        return this;
    }
}