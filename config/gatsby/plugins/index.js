const mdxOptions = require('./mdxOptions');
const transformerRemarkOptions = require('./transformerRemarkOptions');
const analyticOptions = require('./analyticOptions');
const manifestOptions = require('./manifestOptions');
const feedOptions = require('./feedOptions');
const robotsTxtOptions = require('./robotsTxtOptions');

module.exports = {
    mdx: mdxOptions,
    transformerRemark: transformerRemarkOptions,
    analytic: analyticOptions,
    rssFeed: feedOptions,
    manifest: manifestOptions,
    robotsTxt: robotsTxtOptions,
};
