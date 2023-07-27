module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
};
// module.exports = {
//   moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
//   transform: {
//       '^.+\\.(js|jsx)?$': 'babel-jest'
//   },
//   testEnvironment: 'jsdom',
//   moduleNameMapper: {
//       '^@/(.*)$': '<rootDir>/$1'
//   },
//   testMatch: [
//       '<rootDir>/**/*.test.(js|jsx|ts|tsx)', '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
//   ],
//   transformIgnorePatterns: ['<rootDir>/node_modules/']
// };
// module.exports = {
//   clearMocks: true,
//   collectCoverage: false,
//   coverageDirectory: "coverage",
//   coverageProvider: "v8",

//   moduleFileExtensions: [
//     "js",
//     "mjs",
//     "cjs",
//     "jsx",
//     "ts",
//     "tsx",
//     "json",
//     "node",
//   ],
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/$1",
//   },
//   testEnvironment: "jest-environment-node",
//   testMatch: [
//     "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
//     "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
//   ],
//   transformIgnorePatterns: ["<rootDir>/node_modules/"],
// };
