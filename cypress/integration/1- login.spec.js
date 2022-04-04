/// <reference types="Cypress" />

describe('The Internet - Herokuapp - Login Page V1', () => {
    
    it('Login com sucesso', () => {
        //ARRANGE
        //visitar o site
        cy.visit('https://the-internet.herokuapp.com/');
        //clicar no link Form Authentication
        cy.get("a[href='/login']").click();

        //ACT
        //preencher username
        cy.get('#username').type('tomsmith');
        //preencher password
        cy.get('#password').type('SuperSecretPassword!');
        //clicar no botão Login 
        cy.get('.radius').click();

        //ASSERT
        //conferir que a mensagem de sucesso aparece
        cy.get('#flash').should('be.visible').contains('You logged into a secure area!');
    });

    it('Login com falha', () => {
        //ARRANGE
        //visitar o site
        cy.visit('https://the-internet.herokuapp.com/');        
        //clicar no link Form Authentication
        cy.get("a[href='/login']").click();

        //ACT
        //preencher username
        cy.get('#username').type('usuarioInvalido');
        //preencher password
        cy.get('#password').type('senhaInvalida');
        //clicar no botão Login 
        cy.get('.radius').click();

        //ASSERT
        //conferir que a mensagem de sucesso aparece
        cy.get('#flash').should('be.visible').contains('Your username is invalid!');
    });
});