import browserOn from "../utils/basePageUtil"
import {selectorLoginPage} from "../selector/loginPage";

class MainPage {

      login(username,password){
        browserOn.click(selectorLoginPage.signInButton);
        browserOn.write(selectorLoginPage.emailInput,username);
        browserOn.write(selectorLoginPage.passwordInput,password);
        browserOn.click(selectorLoginPage.loginButton);
    }

}
export default new MainPage();
