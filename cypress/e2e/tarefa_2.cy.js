/// <reference types="Cypress" />

describe.only('Validar quilotoneladas', () => {
    it('Deve validar valor de energia em quilotoneladas e verifica se é maior que valor dado', () => {
       cy.tarefa_2(5) 
    });
});