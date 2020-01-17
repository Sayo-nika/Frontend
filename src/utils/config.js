const config = {
  BASE_URL:
    process.env.REACT_APP_API_BASE_URL || 'https://stg-backend.sayonika.moe',
  CAPTCHA_KEY: process.env.REACT_APP_RECAPTCHA_SITE_KEY,
  IPFS_GATEWAY: 'https://cloudflare-ipfs.com/ipfs/'
};

export default config;
