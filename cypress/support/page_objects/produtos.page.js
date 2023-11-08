class produtosPage {

    inserirProduto(produto, tamanho, cor, quantidade){
        cy.get('[class="product-block grid"]').contains(produto).click()
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quantidade)        
        cy.get('.single_add_to_cart_button').click()
    }

    navegarCarrinho(){
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
    }  


}

export default new produtosPage()