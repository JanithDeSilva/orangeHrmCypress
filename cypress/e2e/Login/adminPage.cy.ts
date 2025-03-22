import { orangeLogin } from "../../pages/login"
const loginPage = new orangeLogin();

describe('Admin page - Test Suite', () => {

    it('Admin page verification', () => {
        loginPage.visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123")
        .step_clickLogin()
        .step_clickAdminMenu()
        .step_verifyHeaderText()
        .step_typeUserName("Admin")
        .step_selectRole("Admin")
        .step_clickSubmit()
    })

    it('Admin page verification -  only username', () => {
        loginPage.step_Login()
        .step_clickAdminMenu()
        .step_verifyHeaderText()
        .step_typeUserName("Admin")

        .step_clickSubmit()
    })
})