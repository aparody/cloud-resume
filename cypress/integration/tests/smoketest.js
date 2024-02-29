describe('Smoke Test Suite', () => {
    it('Visits the website and checks for expected elements', () => {
      cy.visit('https://d3aji5jkdxgbb5.cloudfront.net/');
  
      cy.get('body').should('exist');
      cy.get('h1').should('be.visible');

      cy.request('GET', 'https://api.example.com/data').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('data');
      });
    });
  });
  