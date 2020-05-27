const testMarket = require('../support/switchMarketsCommands.js');

describe('Validate FAQ Topics', function () {

    const helpAndFAQsTestData = testMarket.getMarketForHelpAndFAQs();
    const testCasesNames = Object.keys(helpAndFAQsTestData.testCases);
    const testCases = helpAndFAQsTestData.testCases;

    before(() => {
        cy.navigateToMarketHelpAndFAQsPage();
    });

    describe('Given I navigate to the Help & FAQs page as a not logged in user', function () {
        testCasesNames.forEach(topic =>
            context(`When I am select ${topic} as return option`, function () {
                it(`Then I should get ${testCases[topic]} as topic navigation url`, function () {
                    cy.verifyFaqTopicUrlAndTitle(topic, testCases[topic]);
                });
            }));
    });
});
