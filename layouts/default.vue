<template>
  <div class="container">
    <section id="information">
      <span class="spacer" />
      <header>
        <img :src="logo" :alt="product" />
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
          />
        </a>
        <div class="links">
          <a href="https://github.com/mesg-foundation" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://discord.mesg.com" target="_blank">
            <i class="fab fa-discord"></i>
          </a>
          <a href="https://docs.mesg.com" target="_blank">
            <i class="fas fa-book"></i>
          </a>
          <a href="mailto:contact@mesg.com" target="_blank">
            <i class="fas fa-envelope-open-text"></i>
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
    product: {
      type: String,
      default: 'Cryptokitties'
    }
  }
}
</script>

<style>
:root {
  --font: 'Open Sans', sans-serif;
  --color-primary: 239, 82, 209;
  --background: rgb(var(--color-primary));
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
  margin-bottom: 1.5em;
}

.text--primary {
  color: rgb(var(--color-primary));
}
span.spacer {
  flex: 1 1 auto;
}
</style>

<style scoped>
header > img {
  width: 156px;
  margin-bottom: 40px;
}
#information {
  flex: 1 1 auto;
  width: 40%;
  background: white;
  border-right: solid 1px #bdafd6;
  padding: 40px;
  display: flex;
  flex-direction: column;
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
