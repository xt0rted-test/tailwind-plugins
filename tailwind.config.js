import formsPlugin from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

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
