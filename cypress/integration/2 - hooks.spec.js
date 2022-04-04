/// <reference types="Cypress" />

describe('The Internet - Herokuapp - Login Page V2', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get("a[href='/login']").click();
    });
    
    it('Login com sucesso', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();
        cy.get('#flash').should('be.visible').contains('You logged into a secure area!');
    });

    it('Login com falha', () => {
        cy.get('#username').type('teste');
        cy.get('#password').type('teste');
        cy.get('.radius').click();
        cy.get('#flash').should('be.visible').contains('Your username is invalid!');
    });
});