<template>
  <nuxt />
</template>

<style>
:root {
  --font-title: "Quicksand", "Source Sans Pro", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-text: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

  --color-primary: 200, 200, 255;
}

html {
  font-family: var(--font-text);
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 1em;
  line-height: 1.5em;
  margin: 0px;
  list-style: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-family: var(--font-title);
  font-size: 2.25em;
  line-height: 3em;
  font-weight: 500;
  display: block;
  letter-spacing: 1px;
  margin-bottom: 1.5em;
}

h2 {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

ul li {
  margin-bottom: 0.75em;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.btn {
  background-color: rgba(var(--color-primary), 0.5);
  text-align: center;
  user-select: none;
  border-radius: 3.5em;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  outline: none;
  padding: 0.75em 2em;
  min-width: 20em;
  display: inline-block;
}
.btn:hover {
  background-color: rgba(var(--color-primary), 1);
  transition: all 100ms;
}

span.spacer {
  flex: 1 1 auto;
}
</style>
