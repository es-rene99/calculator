# Calculator

This is one of the projects from The Odin Project, my own calculator designed on HTML,CSS and JS.

## Cool things I learned

- It appears that some of the best ways to avoid code duplication on BEM is to write more classes (like modifiers) that contains the reused styles. [Stackoverflow](https://stackoverflow.com/questions/59425745/how-to-write-bem-css-without-block-duplicate-nor-even-sass-support) [bem.info](https://en.bem.info/forum/20/)
- There are 3 main keyboard events 
  - keydown – fires when you press a key on the keyboard and it fires repeatedly while you holding down the key.
  - keyup – fires when you release a key on the keyboard.
  - keypress – fires when you press a character keyboard like a,b, or c, not the left arrow key, home, or end keyboard, so no special characters, The keypress also fires repeatedly while you hold down the key on the keyboard along keydown, so both are fired repeatedly for character keys, [but this was deprecated.](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
  [javascripttutorial.net](https://www.javascripttutorial.net/javascript-dom/javascript-keyboard-events/)
- [How to debug webpack with source maps ](https://blog.jakoblind.no/debug-webpack-app-browser/)
- [How to load a site from the dist folder on github pages](https://github.community/t/is-it-possible-to-load-site-from-dist-folder/10550)
```git subtree push --prefix dist origin gh-pages```