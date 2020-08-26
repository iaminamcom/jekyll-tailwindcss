"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var jekyllEnv = process.env.JEKYLL_ENV || "development";
module.exports = {
  plugins: [require("postcss-import"), require("tailwindcss")("./tailwind.config.js"), require("autoprefixer")].concat(_toConsumableArray(jekyllEnv != "development" ? [require("@fullhuman/postcss-purgecss")({
    content: ["!(_site|node_modules)/**/*.+(html|js|md)", "*.html"],
    defaultExtractor: function defaultExtractor(content) {
      return content.match(/[\w-/:]+(?<!:)/g) || [];
    }
  }), require("cssnano")({
    preset: "default"
  })] : []))
};