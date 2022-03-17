//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd

const NAME = 'api.coingecko',
    DOMAIN = `https://${NAME}.com`,
    SITE =`${DOMAIN}/api/v3/coins`,
    API_WP = `${SITE}/markets?vs_currency=usd`

export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP
}