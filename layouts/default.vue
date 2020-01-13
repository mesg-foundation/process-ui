<template>
  <div class="container">
    <Header />
    <section>
      <nuxt />
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  components: { Header, Footer }
}
</script>

<style>
:root {
  --font-title: 'Quicksand', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-text: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  --color-background: 233, 233, 233;
  --color-primary: 200, 200, 255;
  --color-gray: gray;

  --shadow: 0 20px 25px rgba(0, 0, 0, 0.25);
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
  background: rgb(var(--color-background));
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

span.spacer {
  flex: 1 1 auto;
}

.input {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
}

.input > label {
  width: 100%;
  color: var(--color-gray);
  margin-bottom: 0.5em;
}

.input > input,
.input > select,
.input > table {
  padding: 20px;
  background: white;
  outline: none;
  box-shadow: var(--shadow);
  border-radius: 4px;
  height: auto;
  border: none;
  margin-bottom: 40px;
  height: 60px;
  padding-left: 1em;
  font-size: 1em;
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
</style>

<style scoped>
header {
  flex: 0 1 auto;
}
section {
  flex: 1 1 auto;
}
footer {
  flex: 0 1 auto;
}
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
