class carrinhoPage {

    concluirCompra() {
        cy.get('.checkout-button').click()       

    }

    


}

export default new carrinhoPage()