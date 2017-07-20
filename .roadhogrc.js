
const config = {
  entry: 'src/index.js',
  /*publicPath: 'http://jsonplaceholder.typicode.com/',*/
  env: {
    development: {
      extraBabelPlugins: [
        ["import", { libraryName: "antd", style: true }],
      ]
    },
    production: {
      extraBabelPlugins: [
        ["import", { libraryName: "antd", style: true }],
      ]
    }
  },
  proxy: {
  "/api": {
    "target": "http://jsonplaceholder.typicode.com/",
    "changeOrigin": true,
    "pathRewrite": { "^/api" : "" }
  }
},
}


export default config;

