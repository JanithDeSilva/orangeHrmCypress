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

    //exercise from 4th session
    it('(session 4 exercie) Admin page verification - User role text verification', () => {
        loginPage.step_Login()
        .step_clickAdminMenu()
        .step_verifyHeaderText()
        .step_typeUserName("Admin")
        .step_clickSubmit()
        .step_verifyUserRole()
    })
})