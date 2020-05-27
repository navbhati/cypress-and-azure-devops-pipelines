let testMarket;
const market = `${Cypress.env('MARKET')}`;

export function getMarketForHelpAndFAQs() {

    switch (market) {
    case 'uk':
        testMarket = require('../fixtures/uk/helpAndFAQs.json');
        break;

    case 'fr':
        testMarket = require('../fixtures/fr/helpAndFAQs.json');
        break;
    }

    return testMarket;
}