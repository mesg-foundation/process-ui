<template>
  <div class="container">
    <nav v-if="collapsed">
      <span class="spacer" />
      <img :src="logoInline" :alt="product">
      <span class="spacer" />
      <a href="https://mesg.com" target="_blank">
        <img src="https://handbook.mesg.com/brandmark/MESG-brandmark-purple.svg" alt="MESG">
      </a>
      <a @click="collapsed = false" href="#" class="menu">
        <i class="fas fa-chevron-right" />
      </a>
    </nav>
    <section id="information" v-else>
      <a @click="collapsed = true" href="#" class="menu">
        <i class="fas fa-chevron-left" />
      </a>
      <span class="spacer" />
      <header>
        <img :src="logo" :alt="product">
        <h1>
          Connect
          <span class="text--primary">{{ product }}</span> to whatever you want
        </h1>
      </header>
      <ul>
        <li>
          <strong>Pick an event</strong> from a specific service based on your
          needs.
        </li>
        <li>
          <strong>Select a task</strong> from a list of existing running
          services.
        </li>
        <li>
          <strong>Map the inputs</strong> of your task based on your event's
          data or your custom value
        </li>
        <li>
          <strong>Deploy for free</strong> to activate this listener and get you
          task executed for each events.
        </li>
      </ul>
      <span class="spacer" />
      <footer>
        <a href="https://mesg.com" title="Powered by MESG" class="mesg">
          Powered by
          <img
            src="https://handbook.mesg.com/logo/MESG-logo-horizontal-purple.svg"
            alt="MESG"
          >
        </a>
        <div class="links">
          <a href="https://github.com/mesg-foundation" target="_blank">
            <i class="fab fa-github" />
          </a>
          <a href="https://discord.mesg.com" target="_blank">
            <i class="fab fa-discord" />
          </a>
          <a href="https://docs.mesg.com" target="_blank">
            <i class="fas fa-book" />
          </a>
          <a href="mailto:contact@mesg.com" target="_blank">
            <i class="fas fa-envelope-open-text" />
          </a>
        </div>
      </footer>
    </section>
    <section id="content">
      <nuxt />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: 'https://www.cryptokitties.co/images/kitty-eth.svg'
    },
    logoInline: {
      type: String,
      default: 'https://www.cryptokitties.co/images/kitty-eth.svg'
    },
    product: {
      type: String,
      default: 'Cryptokitties'
    }
  },
  data() {
    return {
      collapsed: false
    }
  }
}
</script>

<style>
:root {
  --font: 'Open Sans', sans-serif;
  --color-primary: 239, 82, 209;
  --background: rgba(var(--color-primary), 0.4);
}
</style>

<style>
html {
  font-family: var(--font);
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0px;
  list-style: none;
  color: #3c3940;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-family: var(--font);
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: normal;
  margin-bottom: 20px;
  color: #0e061c;
}

ul {
  padding-left: 20px;
}

ul li {
  margin-bottom: 1em;
}

.text--primary {
  color: rgb(var(--color-primary));
}
span.spacer {
  flex: 1 1 auto;
}
a.btn {
  border-radius: 3px;
  background-color: rgb(var(--color-primary));
  color: white;
  padding: 14px 40px;
  text-decoration: none;
  transition: all 300ms;
  font-family: var(--font);
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
}

.input {
  width: 100%;
  margin-bottom: 40px;
}

label {
  color: #0e061c;
  font-family: var(--font);
  font-size: 17px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
  display: block;
  margin-bottom: 20px;
}

.input > table {
  background: white;
  padding: 20px;
  border-radius: 6px;
  width: 100%;
}
</style>

<style scoped>
nav {
  width: 80px;
  background: white;
  display: flex;
  flex-direction: column;
  border-right: solid 1px #bdafd6;
  padding: 40px;
  justify-content: space-between;
  position: relative;
}

nav > img {
  transform: rotateZ(-90deg);
  height: 40px;
}

header > img {
  width: 156px;
  margin-bottom: 40px;
}
#information {
  position: relative;
  flex: 1 1 auto;
  width: 40%;
  background: white;
  border-right: solid 1px #bdafd6;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.menu {
  position: absolute;
  top: 20px;
  right: -17px;
  background: white;
  border: solid 1px #bdafd6;
  color: rgb(var(--color-primary));
  border-radius: 100%;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
}

#content {
  flex: 1 1 auto;
  width: 60%;
  background: var(--background);
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
}
footer {
  display: flex;
  flex-direction: row;
}
footer > * {
  flex: 1 1 auto;
}
footer img {
  height: 24px;
}
footer > a {
  color: #0e061c;
  font-family: var(--font);
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-decoration: none;
}
footer .links {
  text-align: right;
}
footer .links a {
  color: rgb(var(--color-primary));
  margin-left: 1em;
}
</style>
