module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    './add.js',
  ],
  coverageDirectory: 'jest-coverage',
  modulePathIgnorePatterns: ["<rootDir>/cypress/"]
}
