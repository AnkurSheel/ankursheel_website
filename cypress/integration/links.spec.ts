/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable no-loop-func */
/* eslint-disable no-continue */
/* eslint-disable no-console */
const paths = require('../fixtures/links.json');

const ignoreLinks = new Set();
ignoreLinks.add('https://www.linkedin.com/in/ankursheel');
ignoreLinks.add('http://localhost:9000/downloads/Breakout_setup_v1.1.exe');
ignoreLinks.add('https://swagger.io/');

const checkedLinks = new Set();

const addCheckedLink = (linktoAdd: string): void => {
    // cy.log(`Adding to checked links ${linktoAdd}`);
    checkedLinks.add(linktoAdd);
};

const checkLink = (link: string) => {
    if (!checkedLinks.has(link)) {
        addCheckedLink(link);
    }

    if (link.includes(`${Cypress.config().baseUrl}downloads`)) {
        return;
    }
    console.log({ link });
    cy.visit(`${link}`);
    cy.get('a')
        .each(($a) => {
            // extract the fully qualified href property
            const href = $a.prop('href');
            if (ignoreLinks.has(href) || checkedLinks.has(href)) {
                // cy.log(`Already checked ${href}`);
                return;
            }
            // cy.log(`${href},  parent: ${link}`);
            if (!checkedLinks.has(href)) {
                addCheckedLink(href);
                if (href.includes(`${Cypress.config().baseUrl}`) && !href.includes('rss.xml')) {
                    cy.log(`Recursing ${href}, ${link}`);
                    console.log(`Recursing ${href}, ${link}`);
                    checkLink(href);
                } else {
                    cy.request(href);
                }
            }
        })
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        .then(() => {});
};

describe('Check Links', () => {
    before(() => {
        paths.map((a: any) => {
            addCheckedLink(`${Cypress.config().baseUrl}${a.path.substring(1)}/`);
            addCheckedLink(`${Cypress.config().baseUrl}${a.path.substring(1)}`);
        });
        // eslint-disable-next-line no-restricted-syntax
        for (let item of checkedLinks) {
            cy.log(`Added ${item} `);
        }

        cy.log(`Added ${checkedLinks.size} links`);
    });

    it(`Testing Home`, () => {
        checkLink(Cypress.config().baseUrl);
    });

    paths.forEach((path: any) => {
        it(`Testing ${path.title}`, () => {
            checkLink(path.path);
        });
    });
});
