import preset from 'ts-jest/presets/index.js'

/** @type {import('ts-jest').JestConfigWithTsJest} */
const jestConfig = {
  ...preset.defaultsESM,
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                isolatedModules: true,
                tsconfig: 'tsconfig.json',
                useESM: true,
            },
        ],
    },
}

export default jestConfig
