class LoginPage {

    realizarLogin(usuario, senha) {
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha, { log: false })
        cy.get('.woocommerce-form > .button').click()    

    }

    


}

export default new LoginPage()