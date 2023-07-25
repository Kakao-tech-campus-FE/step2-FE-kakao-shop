export default {
  transform: {
    "^.+\\.[jt]sx?$": ["babel-jest"],
  },
  transformIgnorePatterns: ["node_modules/(?!(sucrase)/)"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  testTimeout: 10000,
  verbose: true,
};
