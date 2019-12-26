module.exports = {
    extends: ['@codinators/eslint-config'],
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['**/scripts/*.ts'],
            },
        ],
    },
};
