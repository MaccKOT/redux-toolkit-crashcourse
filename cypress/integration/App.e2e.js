describe('App E2E', () => {
  it('should have a form', () => {
    cy.visit('/');

    //начальные условия после запуска приложения: строка ввода пуста, есть кнопка с текстом внутри
    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'Add todo');
  });
});
