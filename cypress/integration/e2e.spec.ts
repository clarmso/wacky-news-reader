// <reference types="Cypress" />

describe("Sanity tests", () => {
  const pages = [
    "books",
    "food",
    "health",
    "science",
    "sports",
    "travel",
    "world",
  ];

  beforeEach(() => {
    pages.forEach((page) => {
      cy.intercept(
        `https://api.nytimes.com/svc/topstories/v2/${page}.json?api-key=*`,
        { fixture: page }
      ).as(`${page}News`);
    });
  });

  it("open default page", () => {
    cy.visit("/");
    cy.wait("@worldNews");
    cy.contains("🗞️ Wacky News Reader 🗞️").should("be.visible");
  });

  it("fetch recognized headlines", () => {
    pages.forEach((page) => {
      cy.visit(`/${page}`);
      cy.wait(`@${page}News`);
      cy.contains("🗞️ Wacky News Reader 🗞️").should("be.visible");
    });
  });

  it("toggle between light mode, dark mode and 90s mode", () => {
    cy.visit("/");
    cy.findByTestId("dark-mode").find("input").check();
    cy.findByTestId("90s-mode").find("input").check();
    cy.findByTestId("light-mode").find("input").check();
  });
});
