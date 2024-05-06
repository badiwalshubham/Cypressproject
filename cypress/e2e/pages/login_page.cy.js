export class LoginPage {

     username_textbox =  '#username'
     next_button = 'footer > .lg-ui-button-0000 > .leafygreen-ui-16tr4y'
     password_textbox = '#lg-passwordinput-1'
     login_button = 'footer > .lg-ui-button-0000 > .leafygreen-ui-16tr4y'

     enterUsername(username) {
      cy.get('#username').type(username)
     }

     clickNext() {
      cy.get('footer > .lg-ui-button-0000 > .leafygreen-ui-16tr4y').click()
     }

     enterPassword (password) {
      cy.get('#lg-passwordinput-1').type(password)
     }

     clickLogin(){
      cy.get('footer > .lg-ui-button-0000 > .leafygreen-ui-16tr4y').click()
     }
     
}