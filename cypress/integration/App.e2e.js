// тесты выполняются последовательно, состояние мы сохраняем

describe('App E2E', () => {
  it('should have a form', () => {
    cy.visit('/'); //путь берётся из baseUrl в настройках cypress.json

    //начальные условия после запуска приложения: строка ввода пуста, есть кнопка с текстом внутри
    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'Add todo');
  });

  // проверка возможности вводить текст в форму и добавлять задачи
  it('should add a task', () => {
    cy.get('input[type="text"]')
      .type('Learn React')
      .should('have.value', 'Learn React');
    cy.contains('Add todo').click();

    cy.get('li span:first-of-type').should('have.text', 'Learn React');
    cy.get('input[type="text"]').should('have.value', '');
  });

  // попробуем добавить ещё одну задачку в список дел
  it('should add another task', () => {
    cy.get('input[type="text"]')
      .type('Learn Redux')
      .should('have.value', 'Learn Redux');
    cy.contains('Add todo').click();
    cy.get('li:last-child span:first-of-type').should(
      'have.text',
      'Learn Redux'
    );
    cy.get('input[type="text"]').should('have.value', '');
  });

  // проверка возможности удалять пункты из списка
  it('should delete task', () => {
    cy.get('li').should('have.length', 2);

    cy.get('li:last-child span:last-child').click();

    cy.get('li').should('have.length', 1);
  });

  // проверка на изменение статуса задачки на выполнено при клике на чекбокс
  it('should toggle status', () => {
    cy.get('li input')
      .should('not.have.checked')
      .click()
      .should('have.checked');
  });
});
