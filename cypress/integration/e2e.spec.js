/// <reference types="cypress" />
import HomePage from '../support/page_objects/home.page'
import LoginPage from '../support/page_objects/login.page'
import contaPage from '../support/page_objects/conta.page'
import produtosPage from '../support/page_objects/produtos.page'
import carrinhoPage from '../support/page_objects/carrinho.page'
import checkoutPage from '../support/page_objects/checkout.page'
const dadosLogin = require('../fixtures/perfil.json')
const dadosProdutos = require('../fixtures/produtos.json')
const dadosEndereco = require('../fixtures/endereco.json')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        HomePage.acessarMinhaConta()
        LoginPage.realizarLogin(dadosLogin.usuario, dadosLogin.senha)
        contaPage.acessarProdutos()
        produtosPage.inserirProduto(dadosProdutos[0].produto, dadosProdutos[0].tamanho, dadosProdutos[0].cor, dadosProdutos[0].quantidade)
        contaPage.acessarProdutos()
        produtosPage.inserirProduto(dadosProdutos[1].produto, dadosProdutos[1].tamanho, dadosProdutos[1].cor, dadosProdutos[1].quantidade)
        contaPage.acessarProdutos()
        produtosPage.inserirProduto(dadosProdutos[2].produto, dadosProdutos[2].tamanho, dadosProdutos[2].cor, dadosProdutos[2].quantidade)
        contaPage.acessarProdutos()
        produtosPage.inserirProduto(dadosProdutos[3].produto, dadosProdutos[3].tamanho, dadosProdutos[3].cor, dadosProdutos[3].quantidade)
        produtosPage.clicarBotaoCarrinho()
        carrinhoPage.concluirCompra()
        checkoutPage.finalizarCompra(dadosEndereco[0].nome, dadosEndereco[0].sobrenome, dadosEndereco[0].empresa, dadosEndereco[0].pais, dadosEndereco[0].endereco,
            dadosEndereco[0].numero, dadosEndereco[0].cidade, dadosEndereco[0].estado, dadosEndereco[0].cep, dadosEndereco[0].telefone, dadosEndereco[0].email, dadosEndereco[0].info)
            cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
            cy.get(':nth-child(1) > .woocommerce-table__product-name > a').should('contain', dadosProdutos[0].produto)
            cy.get(':nth-child(1) > .woocommerce-table__product-name > .product-quantity').should('contain', dadosProdutos[0].quantidade)
            cy.get(':nth-child(2) > .woocommerce-table__product-name > a').should('contain', dadosProdutos[1].produto)
            cy.get(':nth-child(2) > .woocommerce-table__product-name > .product-quantity').should('contain', dadosProdutos[1].quantidade)
            cy.get(':nth-child(3) > .woocommerce-table__product-name > a').should('contain', dadosProdutos[2].produto)
            cy.get(':nth-child(3) > .woocommerce-table__product-name > .product-quantity').should('contain', dadosProdutos[2].quantidade)
            cy.get(':nth-child(4) > .woocommerce-table__product-name > a').should('contain', dadosProdutos[3].produto)
            cy.get(':nth-child(4) > .woocommerce-table__product-name > .product-quantity').should('contain', dadosProdutos[3].quantidade)

    });


})