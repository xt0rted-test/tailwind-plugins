# tailwindcss plugin error demo

| Script | Config               | Node options                       | Import with extension |
| ------ | -------------------- | ---------------------------------- | --------------------- |
| css1   | tailwind.config.js   | None                               | No                    |
| css2   | tailwind.config.mjs  | None                               | No                    |
| css3   | tailwind.config.js   | `--no-experimental-require-module` | No                    |
| css4   | tailwind.config.mjs  | `--no-experimental-require-module` | No                    |
| css5   | tailwind.config2.js  | None                               | Yes                   |
| css6   | tailwind.config2.mjs | None                               | Yes                   |

Run `npm test` and compare the files in the `/dist` folder.
The results from my machine are included as a reference.

- OS: Windows
- Node: 22.12.0

## Node 22.11.0

All six output files should match and contain the contents of `@tailwindcss/forms`.

## Node 22.12.0+

| File      | Includes `@tailwindcss/forms` |
| --------- | ----------------------------- |
| site1.css | ❌                            |
| site2.css | ✅                            |
| site3.css | ❌                            |
| site4.css | ✅                            |
| site5.css | ✅                            |
| site6.css | ✅                            |

## Node 23.*

Should have the same results of Node 22.12.0

## All versions

The bug seems to happen  when `tailwindcss/defaultTheme` is also imported into the config.
Comment that line out and the output will be correct in all six files.
Changing the import to include a `.js` file extension will also result in the correct output.
