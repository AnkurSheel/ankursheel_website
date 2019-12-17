module.exports = {
    '*.+(js|json|yml|yaml|css|less|scss|ts|tsx|md|mdx|graphql)': ['prettier --write', 'git add'],
    '*.+(md|mdx)': ['markdownlint *.mdx'],
    '*.+(js|jsx|ts|tsx)': ['eslint --fix'],
};
