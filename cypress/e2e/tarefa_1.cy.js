/// <reference types="Cypress" />

describe('Validar a temperatura', () => {
    it('Deve validar temperatura no canto da tela e verifica se é maior que valor dado', () => {
        cy.tarefa_1(25)
    });
});
