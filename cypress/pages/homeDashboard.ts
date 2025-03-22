import { leftPanel } from "./panel/leftPanel"
import { adminPage } from "../pages/adminPage"

export class homeDashboard {

    private sidePanel;

    constructor(){
        this.sidePanel = new leftPanel
    }

    private lbl_timeAtWork = "//p[normalize-space()='Time at Work']";

    public step_verifyDashboardHeaderText(){
        cy.xpath(this.lbl_timeAtWork).should('have.text', 'Time at Work')
        return this;
    }

    public step_clickAdminMenu(){
        this.sidePanel.step_clickAdminMenu();
        return new adminPage();
    }
}