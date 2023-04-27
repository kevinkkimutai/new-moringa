module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.js?$': 'babel-jest',
      '^.+\\.mjs$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node', 'mjs'],
    transformIgnorePatterns: [
      'node_modules/(?!(axios)/)',
    ],
    testEnvironment: 'jsdom',
  };
  