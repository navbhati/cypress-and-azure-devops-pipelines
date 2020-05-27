const testMarket = require('./switchMarketsCommands.js');

const marketInfo = testMarket.getMarketForHelpAndFAQs();
const helpAndFAQsUrl = marketInfo.helpAndFAQsUrl;


Cypress.Commands.add('navigateToMarketHelpAndFAQsPage', () => {
    cy.visit(helpAndFAQsUrl);
});


Cypress.Commands.add('verifyFaqTopicUrlAndTitle', (topic, url)=>{
    cy.get(`a[href*="${url}"]`, {
        timeout:5000
    })
        .contains(topic);
});

Cypress.on('uncaught:exception', () => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});
