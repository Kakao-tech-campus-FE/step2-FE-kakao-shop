module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/fileMock.js",
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
