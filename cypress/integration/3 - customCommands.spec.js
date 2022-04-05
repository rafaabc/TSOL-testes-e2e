/// <reference types="Cypress" />

describe('The Internet - Herokuapp - Login Page V3', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get("a[href='/login']").click();
    });
    
    it('Login com sucesso', () => {
        cy.submeterFormularioLogin();
        cy.get('#flash').should('be.visible').contains('You logged into a secure area!');
    });

    it('Login com falha', () => {
        cy.get('#username').type('usernameInvalido');
        cy.get('#password').type('passwordInvalido');
        cy.get('.radius').click();
        cy.get('#flash').should('be.visible').contains('Your username is invalid!');
    });
});
