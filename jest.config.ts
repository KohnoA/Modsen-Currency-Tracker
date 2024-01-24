/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.svg$': 'jest-transformer-svg',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3)$': 'jest-transform-stub',
  },
};

export default config;
