<template>
  <div class="container">
    <section>
      <h1>Connect XXX to whatever</h1>
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
      <nav>
        <nuxt-link class="btn" to="/connect">Connect</nuxt-link>
        <a class="btn" href="https://docs.mesg.com" target="_blank">Docs</a>
      </nav>
    </section>
    <footer>
      <a href="https://github.com/mesg-foundation" target="_blank">Github</a>
      <a href="https://discord.mesg.com" target="_blank">Discord</a>
      <a href="https://docs.mesg.com" target="_blank">Documentation</a>
      <a href="mailto:contact@mesg.com" target="_blank">Contact</a>
      <span class="spacer"></span>
      <a href="https://mesg.com" target="_blank">
        <img
          src="https://handbook.mesg.com/logo/MESG-logo-horizontal-purple.svg"
          alt="MESG"
        />
      </a>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
section {
  padding: 4em;
  flex: 1 1 auto;
}
nav {
  margin-top: 4em;
}
nav > a {
  margin-right: 2em;
}
footer {
  flex: 0 1 auto;
  display: flex;
  padding: 2em;
  align-items: center;

  a {
    margin-right: 1.5em;
    &:last-child {
      margin-right: 0;
    }
  }
  img {
    height: 2em;
  }
}
</style>
