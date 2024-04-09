// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
  },
  plugins: [
    resolve(), // Node.js 모듈을 해석합니다.
    commonjs(), // CommonJS 모듈을 ES6으로 변환합니다.
  ],
};
