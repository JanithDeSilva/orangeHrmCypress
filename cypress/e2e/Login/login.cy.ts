import { orangeLogin } from "../../pages/login"

const loginPage = new orangeLogin();

describe('OrangeCRM', () => {

    it('Login and Validate Title', () => {

        //visit the page
        loginPage.visitUrl()
        .step_enterUsername("Admin")
        .step_enterPassword("admin123")
        .step_clickLogin()

        

    })
})
