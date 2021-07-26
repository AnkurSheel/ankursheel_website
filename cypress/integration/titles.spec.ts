/* eslint-disable @typescript-eslint/no-var-requires */
const paths = require('../fixtures/links.json');

describe('Check Title Lengths', () => {
    paths.forEach((path: any) => {
        it(`Title Length for "${path.title}" is <= 60`, () => {
            cy.visit(`${path.path}`);
            cy.get('h1').then(($h1) => {
                expect($h1).to.have.length(1);
                const text = $h1.first().text();
                cy.log(`${text} : ${text.length}`);
                expect(text).length.to.lte(60);
            });
        });
    });
});
