module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'fix', 'feat', 'perf', 'docs', 'chore'
            ]
        ],
        'type-empty': [2, "never"],
    }
};
