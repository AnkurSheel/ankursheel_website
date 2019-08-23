module.exports = {
    '*.+(js|jsx|ts|tsx)': ['eslint'],
    '*.+(js|json|yml|yaml|css|less|scss|ts|tsx|md|mdx|graphql)': ['prettier --write', 'git add'],
};
