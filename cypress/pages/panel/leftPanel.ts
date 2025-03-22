export class leftPanel{

    private btn_toggleMenu_Admin = "//span[normalize-space()='Admin']";

    private btn_toggleMenu_Pim = "//span[normalize-space()='PIM']";

    public step_clickAdminMenu(){
        cy.xpath(this.btn_toggleMenu_Admin).click();
        return this;
    }

    public step_clickPimMenu(){
        cy.xpath(this.btn_toggleMenu_Pim).click();
        return this;
    }
}