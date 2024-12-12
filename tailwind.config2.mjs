import formsPlugin from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme.js";

/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: {
    files: [
      "./index.html",
    ],
  },
  plugins: [
    formsPlugin,
  ],
};

export default tailwindConfig;
