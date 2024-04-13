describe("Form sayfası testleri", () =>{
beforeEach(() => {
    cy.visit("http://localhost:3000/");
});

it("Name alanına yazı yaz", () =>{
    cy.get("input[name=name]").type("Ali");
    cy.get("input[name=name]").should("have.value", "Ali");
});

it("Email alanına mail adresi yaz", () =>{
    cy.get("input[name=email]").type("ali@veli.com");
    cy.get("input[name=pasworld]").type("123456");
    cy.get("input[name=terms]").should("be.checked");

    cy.get("#user-font-btn").should("be.enabled");
    cy.get("#user-form-btn").click();
});