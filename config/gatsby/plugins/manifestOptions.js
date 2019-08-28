const config = require('../siteConfig');

module.exports = {
    name: config.siteTitle,
    short_name: config.siteTitle,
    start_url: '/',
    background_color: config.backgroundColor,
    theme_color: config.themeColor,
    display: 'standalone',
    icon: config.icon,
};
