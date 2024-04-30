import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import { visualizer } from "rollup-plugin-visualizer";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "esm", // ES 모듈 포맷을 사용하여 트리 쉐이킹을 최대화
    plugins: [terser()], // 코드 압축
  },
  plugins: [resolve(), visualizer()],
};
