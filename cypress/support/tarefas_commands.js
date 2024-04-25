/// <reference types="Cypress" />

Cypress.Commands.add('tarefa_1', (valor) => {
    cy.visit("https://www.windy.com/?-3.717,-38.529,5")
    cy.get('.w-now > big')
        .should((tag_temp) => {
            const temperatura = parseInt(tag_temp.text())
            expect(temperatura).to.be.greaterThan(valor)
        })
})

Cypress.Commands.add('tarefa_2', (valor) => {
    cy.visit("https://www.windy.com/?-3.717,-38.529,5")
    cy.get('.ws-wind')
        .should((tag_kt) =>{
            const quilotonelada = parseInt(tag_kt.text().replaceAll(' ','').replaceAll('"','').substring(0, tag_kt.text().length - 2))
            expect (quilotonelada).to.be.greaterThan(valor)
        })
})
