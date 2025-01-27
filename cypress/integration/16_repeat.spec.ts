import { AppPage } from './app.po';

describe('The repeat level 16', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/repeat');
  });

  it('should failed on wrong solution', () => {
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('not.have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeItem(2).should('contain.text', '');
    page.getRecipeItem(3).should('contain.text', '');
    page.getRecipeWarningIsToMuchFruits().should('not.exist');
    page.getRecipeWarningIsToLittleFruits().should('exist');
    page.getNextButton().should('have.attr', 'disabled');
  });

  it('should success on valid solution', () => {
    page.getCodeEditor().type('repeat(3)');
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('not.have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeItem(2).should('contain.text', '✔');
    page.getRecipeItem(3).should('contain.text', '✔');
    page.getRecipeWarningIsToMuchFruits().should('not.exist');
    page.getRecipeWarningIsToLittleFruits().should('not.exist');
    page.getNextButton().should('not.have.attr', 'disabled');
  });
});
