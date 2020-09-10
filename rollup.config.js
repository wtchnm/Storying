import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import package_ from "./package.json";

const commonOutputProperties = {
  name: "Button",
  sourcemap: true,
  globals: {
    react: "React",
  },
};

export default {
  input: "src/index.ts",
  external: ["react"],
  output: [
    {
      ...commonOutputProperties,
      file: package_.module,
      format: "esm",
    },
    {
      ...commonOutputProperties,
      file: package_.main,
      format: "cjs",
    },
    {
      ...commonOutputProperties,
      file: package_.browser,
      format: "umd",
    },
    {
      ...commonOutputProperties,
      file: package_.browser.replace(".umd.js", ".umd.min.js"),
      format: "umd",
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript(),
    nodeResolve({
      browser: true,
    }),
    postcss({
      minimize: true,
      extract: "Button.min.css",
      sourceMap: true,
    }),
  ],
};
