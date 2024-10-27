module.exports = {
  plugins: [
    require("postcss-import"), // Add this to process @import statements
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
