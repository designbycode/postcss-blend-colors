import { resolve } from "path"
import { defineConfig } from "vitest/config"
import dts from "vite-plugin-dts"

export default defineConfig({
  test: {
    // @ts-expect-error
    coverage: {
      reporter: ["text", "json-summary"],
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80,
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [resolve(__dirname, "./src/index.ts"), resolve(__dirname, "./src/mixColors.ts")],
      name: "Postcss blend colors",
      // the proper extensions will be added
      // fileName: "index",
    },
  },
  plugins: [dts()],
})
