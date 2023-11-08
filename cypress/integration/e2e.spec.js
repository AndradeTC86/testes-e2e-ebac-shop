/// <reference types="cypress" />
import HomePage from "../support/page_objects/home.page"
import LoginPage from "../support/page_objects/login.page"
import contaPage from "../support/page_objects/conta.page"
import produtosPage from "../support/page_objects/produtos.page"
import carrinhoPage from "../support/page_objects/carrinho.page"
import checkoutPage from "../support/page_objects/checkout.page"
const dadosLogin = require("../fixtures/perfil.json")
const dadosProdutos = require("../fixtures/produtos.json")
const dadosEndereco = require("../fixtures/endereco.json")

context("Exercicio - Testes End-to-end - Fluxo de pedido", () => {
  
  beforeEach(() => {
    cy.visit("/")
  });

  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {
    HomePage.acessarMinhaConta()
    LoginPage.realizarLogin(dadosLogin.usuario, dadosLogin.senha)
    for (const produto of dadosProdutos) {
      contaPage.acessarProdutos()
      produtosPage.inserirProduto(produto.produto, produto.tamanho, produto.cor, produto.quantidade)
    }
    produtosPage.navegarCarrinho()
    carrinhoPage.concluirCompra()
    checkoutPage.finalizarCompra(
      dadosEndereco[0].nome,
      dadosEndereco[0].sobrenome,
      dadosEndereco[0].empresa,
      dadosEndereco[0].pais,
      dadosEndereco[0].endereco,
      dadosEndereco[0].numero,
      dadosEndereco[0].cidade,
      dadosEndereco[0].estado,
      dadosEndereco[0].cep,
      dadosEndereco[0].telefone,
      dadosEndereco[0].email,
      dadosEndereco[0].info
    )
    cy.get(".woocommerce-notice").should(
      "contain",
      "Obrigado. Seu pedido foi recebido."
    )
  })
})
