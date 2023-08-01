import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import EnvironmentPlugin from "vite-plugin-environment";
process.env = Object.assign(
  process.env,
  loadEnv("production", process.cwd(), "")
);

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.REACT_APP_PATH,
  plugins: [react(), tsconfigPaths(), EnvironmentPlugin("all")],
});
