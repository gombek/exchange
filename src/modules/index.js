import createRates from './rates';
import createWallet from './wallet';
import createCurrencies from './currencies';
import createExchanger from './exchanger';

export const walletRates = createRates('walletRates');
export const wallet = createWallet('wallet');
export const currencies = createCurrencies('currencies');
export const exchanger = createExchanger('exchanger');
