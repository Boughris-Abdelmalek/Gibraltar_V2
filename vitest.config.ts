/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
// import "@testing-library/jest-dom";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./jest-setup.ts"],
  },
});
