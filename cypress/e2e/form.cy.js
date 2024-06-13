describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get("#inputName").type("Georgios");
    cy.get("#inputSurname").type("Drivas");
    cy.get("#inputEmail").type("example@gmail.com");
    cy.get("#inputTitle").type("Customer Support");
    cy.get("#inputMessage").type("I want to format my Windows 11 laptop");
    cy.get("#btn").click();

    cy.get("#not-number").should("have.text", "1");
  })
})