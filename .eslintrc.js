module.exports = {
    root: true,

    env: {
        node: true
    },

    extends: ["plugin:vue/essential", "@vue/standard", "prettier"],

    parserOptions: {
        parser: "@typescript-eslint/parser"
    },

    rules: {
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "prettier/prettier": "error"
    },

    extends: ["plugin:vue/essential", "@vue/standard", "@vue/typescript", "prettier"]
};
