import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";

export default {
  input: "./src/index.jsx",
  output: {
    file: "./dist/bundle.js",
    format: "iife",
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env"],
    }),
    ...(process.env.ROLLUP_WATCH
      ? [
          serve({
            open: true, // 브라우저에서 바로 열기
            contentBase: ["dist"], // 정적 파일 제공 디렉토리
            host: "localhost",
            port: 10001,
          }),
          livereload("dist"), // livereload 대상 디렉토리
        ]
      : []),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
  ],
};
