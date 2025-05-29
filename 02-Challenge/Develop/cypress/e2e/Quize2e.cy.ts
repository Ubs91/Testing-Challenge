describe("<Quiz e2e test />", () => {
  beforeEach(()=> {
    cy.visit("/")
  }) 
  it("should render homepage", () => {
   
    cy.get("button").should("have.text", "Start Quiz");
  });
  it("should click quiz start button and render first question", () => {
    
    cy.get("button").should("have.text", "Start Quiz").click();
    cy.get("h2").should("exist");
  });
  it("should render results page", () => {
    
    cy.get("button").should("have.text", "Start Quiz").click();

    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click(); 
    }
    

   cy.get("button").should("have.text", "Take New Quiz");
  });
  it("should click Take New Quiz button and render first question", () => {
    
    cy.get("button").should("have.text", "Start Quiz").click();

    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click(); 
    }
    cy.get("button").should("have.text", "Take New Quiz").click();
    cy.get("h2").should("exist");
  });
});