/* eslint-disable no-continue */
/* eslint-disable no-console */
const ignoreLinks = new Set();
ignoreLinks.add('https://www.linkedin.com/in/ankursheel');
ignoreLinks.add('http://localhost:9000/downloads/Breakout_setup_v1.1.exe');
ignoreLinks.add('https://swagger.io/');

const checkedLinks = new Set();
const queue: string[] = [`${Cypress.config().baseUrl}`];

const addCheckedLink = (linktoAdd: string): void => {
    cy.task('log', `Adding to checked links ${linktoAdd}`);
    checkedLinks.add(linktoAdd);
};
const visitedLinks: string[] = [];

const loadMoreLinks = () => {
    let link: string | undefined;
    while (queue.length > 0) {
        link = queue.shift();
        console.log({ link });
        if (!link) {
            continue;
        }
        if (checkedLinks.has(link)) {
            cy.log(`Already checked ${link}`);
            continue;
        }
        addCheckedLink(link);
        if (link.includes(`${Cypress.config().baseUrl}downloads`)) {
            continue;
        }
        break;
    }
    if (link) {
        visitedLinks.push(link);
        cy.task(
            'log',
            `Checked Links:${checkedLinks.size} Visited Links:${visitedLinks.length} Queue: ${queue.length}`
        );
        cy.visit(`${link}`).then(() => {
            cy.get('a')
                .each(($a) => {
                    // extract the fully qualified href property
                    const href = $a.prop('href');
                    if (ignoreLinks.has(href) || checkedLinks.has(href)) {
                        return;
                    }
                    // console.log({ href, parent: link });
                    if (queue.indexOf(href) === -1) {
                        if (href.includes(`${Cypress.config().baseUrl}`) && !href.includes('rss.xml')) {
                            // cy.task('log', `Adding to queue ${href}`);
                            queue.push(href);
                        } else {
                            addCheckedLink(href);
                        }
                        cy.request(href);
                    }
                })
                .then(() => {
                    loadMoreLinks();
                });
        });
    }
};
describe('Check Links', () => {
    it('Check links', () => {
        loadMoreLinks();
        cy.task('log', `${checkedLinks}`);
        console.log({ checkedLinks });
    });
});
