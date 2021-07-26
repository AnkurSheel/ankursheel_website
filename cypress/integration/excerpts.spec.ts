/* eslint-disable @typescript-eslint/no-var-requires */
const paths = require('../fixtures/links.json');

describe('Check Excerpt Lengths', () => {
    paths
        .filter((a) => a.excerpt !== null)
        .forEach((path: any) => {
            it(`Excerpt Length for "${path.title}" is <= 160`, () => {
                cy.visit(`${path.path}`);
                cy.get('h1').then(() => {
                    cy.log(`${path.excerpt} : ${path.excerpt.length}`);
                    expect(path.excerpt).length.to.lte(160);
                });
            });
        });
});
