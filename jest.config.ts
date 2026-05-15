export default {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
      isolatedModules: true,
    },
  },
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};
