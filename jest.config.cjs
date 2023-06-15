
/** @type {import('ts-jest').JestConfigWithTsJest}
 * @link https://kulshekhar.github.io/ts-jest/docs/guides/esm-support/
 */
module.exports = {
    verbose: process.env.DEBUG === 'true',
    extensionsToTreatAsEsm: ['.ts'],
    preset: 'ts-jest/presets/default-esm', // or other ESM presets
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    transform: {
        // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
        // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
        '^.+\\.ts?$': [
            'ts-jest',
            {
                useESM: true,
            },
        ],
    },
    collectCoverage: true,
    collectCoverageFrom: [
        // other testable file extensions should go here
        "src/**/*.{ts}"
    ],
    coverageDirectory: "coverage",
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        },
    },
}
