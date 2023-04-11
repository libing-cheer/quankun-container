module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    // 自定义规则
    "no-debugger": "off",
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-undef": "off",
    "no-unused-vars": "off",
    "vue/no-unused-vars": "off",
  },
};
