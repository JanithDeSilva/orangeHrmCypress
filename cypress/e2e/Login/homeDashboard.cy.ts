import { homeDashboard } from "../../pages/homeDashboard";
import { orangeLogin } from "../../pages/login"
import { adminPage } from "../../pages/adminPage"

const loginPage = new orangeLogin();
const homeDashbrd = new homeDashboard();
const adminPg = new adminPage();

describe('OrangeCRM', () => {

    // it('Login and Validate Title', () => {

    //     //visit the page
    //     loginPage.visitUrl()
    //     .step_enterUsername("Admin")
    //     .step_enterPassword("admin123")
    //     .step_clickLogin()

    //     homeDashbrd.step_verifyDashboardHeaderText()
    //     .step_clickAdminMenu()

    //     adminPg.step_verifyHeaderText()

    // })

    it('Method 2: Home Page', () => {

        //visit the page
        loginPage.visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123")
        .step_clickLogin()
        .step_verifyDashboardHeaderText()
        .step_clickAdminMenu()
        .step_verifyHeaderText()

        


    })
})