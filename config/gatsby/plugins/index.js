const mdxOptions = require('./mdxOptions');
const transformerRemarkOptions = require('./transformerRemarkOptions');
const analyticOptions = require('./analyticOptions');
const manifestOptions = require('./manifestOptions');
const feedOptions = require('./feedOptions');

module.exports = {
    mdx: mdxOptions,
    transformerRemark: transformerRemarkOptions,
    analytic: analyticOptions,
    rssFeed: feedOptions,
    manifest: manifestOptions,
};
