export default {
  preset: "ts-jest",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["./setupTests.ts"],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
  },
};
