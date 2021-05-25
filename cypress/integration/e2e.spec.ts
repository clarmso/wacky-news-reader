/// <reference types="cypress" />

describe("Sanity tests", () => {
  const sections = [
    "books",
    "food",
    "health",
    "science",
    "sports",
    "travel",
    "world",
  ];

  beforeEach(() => {
    sections.forEach((section) => {
      cy.intercept(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=*`,
        { fixture: section }
      ).as(`${section}News`);
    });
  });

  it("open default page", () => {
    cy.visit("/");
    cy.wait("@worldNews");
    cy.contains("🗞️ Wacky News Reader 🗞️").should("be.visible");
  });

  it("fetch recognized headlines", () => {
    sections.forEach((section) => {
      cy.visit(`/${section}`);
      cy.wait(`@${section}News`);
      cy.contains("🗞️ Wacky News Reader 🗞️").should("be.visible");
    });
  });

  it("toggle between light mode, dark mode and 90s mode", () => {
    cy.visit("/");
    cy.findByTestId("dark-mode").find("input").check();
    cy.findByTestId("90s-mode").find("input").check();
    cy.findByTestId("light-mode").find("input").check();
  });

  it("toggle between the different sections", () => {
    cy.visit("/");
    sections.forEach((section) => {
      cy.findByTestId("section-menu").click();
      cy.findByTestId(`menu-item-${section}`).click();
      cy.wait(`@${section}News`);
      cy.url().should("contain", section);
    });
  });

  it("open about modal", () => {
    cy.visit("/");
    cy.findByTestId("about-modal").should("not.exist");
    cy.findByTestId("about-link").click();
    cy.findByTestId("about-modal").should("be.visible");
    cy.findByTestId("close-modal-button").click();
    cy.findByTestId("about-modal").should("not.exist");
  });
});
