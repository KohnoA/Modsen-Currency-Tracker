import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1440,
  viewportHeight: 700,
  video: false,
  e2e: {
    baseUrl: 'http://localhost:8080',
  },
});
