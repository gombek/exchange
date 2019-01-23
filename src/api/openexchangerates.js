const APP_ID = 'c537fb8d01784c5c872eeaed32cc0bcd';

/**
 * @param {string} [from] Currency code
 * @param {Array} [to] Currencies codes
 * @return {Promise<Response>}
 */
export const latest = (from, to) => fetch('https://openexchangerates.org/api/latest.json?app_id='
    + APP_ID
    + (from ? `&base=${encodeURIComponent(from)}`: '')
    + (to ? `&symbols=${encodeURIComponent(to.toString(-1))}` : '')
)
  .then(response => response.ok ? response.json() : null)
  .catch(error => {
    console.warn('Fetch failed:', error);
    return null;
  });