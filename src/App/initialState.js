const wallet = new Map([
  ['USD', { balance: 200 }],
  ['EUR', { balance: 15 }],
  ['PLN', { balance: 1000 }],
]);


const tempToReduceRequestsCount = {
  "disclaimer": "Usage subject to terms: https://openexchangerates.org/terms",
  "license": "https://openexchangerates.org/license",
  "timestamp": 1547856004,
  "base": "USD",
  "rates": {
    "AED": 3.673014,
    "AFN": 75.351239,
    "ALL": 109.2,
    "AMD": 485.346857,
    "ANG": 1.775468,
    "AOA": 310.214,
    "ARS": 37.5735,
    "AUD": 1.395089,
    "AWG": 1.800506,
    "AZN": 1.7025,
    "BAM": 1.715399,
    "BBD": 2,
    "BDT": 83.673912,
    "BGN": 1.721002,
    "BHD": 0.376929,
    "BIF": 1820,
    "BMD": 1,
    "BND": 1.576006,
    "BOB": 6.911934,
    "BRL": 3.75165,
    "BSD": 1,
    "BTC": 0.000276354785,
    "BTN": 71.03099,
    "BWP": 10.507979,
    "BYN": 2.14738,
    "BZD": 2.010646,
    "CAD": 1.326084,
    "CDF": 1630,
    "CHF": 0.995655,
    "CLF": 0.024214,
    "CLP": 671.095948,
    "CNH": 6.802826,
    "CNY": 6.7788,
    "COP": 3141.466552,
    "CRC": 598.676319,
    "CUC": 1,
    "CUP": 25.75,
    "CVE": 96.9015,
    "CZK": 22.5109,
    "DJF": 178,
    "DKK": 6.569615,
    "DOP": 50.56,
    "DZD": 118.419901,
    "EGP": 17.887,
    "ERN": 14.994615,
    "ETB": 28.47,
    "EUR": 0.8797,
    "FJD": 2.12251,
    "FKP": 0.77658,
    "GBP": 0.77658,
    "GEL": 2.655,
    "GGP": 0.77658,
    "GHS": 4.92,
    "GIP": 0.77658,
    "GMD": 49.52,
    "GNF": 9200,
    "GTQ": 7.722354,
    "GYD": 208.77066,
    "HKD": 7.84345,
    "HNL": 24.47009,
    "HRK": 6.535974,
    "HTG": 78.502344,
    "HUF": 279.85,
    "IDR": 14159.35,
    "ILS": 3.68854,
    "IMP": 0.77658,
    "INR": 71.252,
    "IQD": 1191,
    "IRR": 42105,
    "ISK": 121.249803,
    "JEP": 0.77658,
    "JMD": 130.289695,
    "JOD": 0.709603,
    "JPY": 109.77490682,
    "KES": 101.69,
    "KGS": 68.704755,
    "KHR": 4015,
    "KMF": 433.30205,
    "KPW": 900,
    "KRW": 1125.797392,
    "KWD": 0.303249,
    "KYD": 0.833592,
    "KZT": 379.79576,
    "LAK": 8555,
    "LBP": 1508.5,
    "LKR": 181.65,
    "LRD": 159.750242,
    "LSL": 13.85,
    "LYD": 1.39,
    "MAD": 9.56387,
    "MDL": 17.142459,
    "MGA": 3610,
    "MKD": 54.109793,
    "MMK": 1537.985156,
    "MNT": 2453.75,
    "MOP": 8.081786,
    "MRO": 357,
    "MRU": 36.4,
    "MUR": 34.323,
    "MVR": 15.499961,
    "MWK": 728.564932,
    "MXN": 19.084,
    "MYR": 4.1125,
    "MZN": 61.699989,
    "NAD": 13.85,
    "NGN": 363,
    "NIO": 32.57,
    "NOK": 8.5596,
    "NPR": 113.651348,
    "NZD": 1.48368,
    "OMR": 0.38499,
    "PAB": 1,
    "PEN": 3.3205,
    "PGK": 3.36,
    "PHP": 52.61358,
    "PKR": 139.2,
    "PLN": 3.7744,
    "PYG": 6065.14701,
    "QAR": 3.641,
    "RON": 4.139596,
    "RSD": 104.230964,
    "RUB": 66.1731,
    "RWF": 885,
    "SAR": 3.7507,
    "SBD": 8.072908,
    "SCR": 13.653189,
    "SDG": 47.55,
    "SEK": 9.0261,
    "SGD": 1.3587,
    "SHP": 0.77658,
    "SLL": 8390,
    "SOS": 582,
    "SRD": 7.458,
    "SSP": 130.2634,
    "STD": 21050.59961,
    "STN": 21.585,
    "SVC": 8.75247,
    "SYP": 514.856773,
    "SZL": 13.85,
    "THB": 31.746,
    "TJS": 9.440789,
    "TMT": 3.499986,
    "TND": 2.964244,
    "TOP": 2.257667,
    "TRY": 5.329498,
    "TTD": 6.77875,
    "TWD": 30.872,
    "TZS": 2308.2,
    "UAH": 27.956,
    "UGX": 3711.141867,
    "USD": 1,
    "UYU": 32.68745,
    "UZS": 8355,
    "VEF": 248487.642241,
    "VES": 1000.225839,
    "VND": 23264.918209,
    "VUV": 111.025084,
    "WST": 2.608117,
    "XAF": 577.045373,
    "XAG": 0.06520438,
    "XAU": 0.00078026,
    "XCD": 2.70255,
    "XDR": 0.716456,
    "XOF": 577.045373,
    "XPD": 0.0007249,
    "XPF": 104.976134,
    "XPT": 0.00125319,
    "YER": 250.349279,
    "ZAR": 13.84589,
    "ZMW": 11.908,
    "ZWL": 322.355011
  }
};

export default {
  walletFrom: ['USD'], // locked to USD because of subscription plan.
  walletTo: Array.from(wallet.keys()),
  wallet,
  rates: new Map([
    [[tempToReduceRequestsCount.base], tempToReduceRequestsCount.rates],
  ]),
};