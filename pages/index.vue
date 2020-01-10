<template>
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
</template>

<style scoped>
section {
  padding: 4em;
}
nav {
  margin-top: 4em;
}
nav > a {
  margin-right: 2em;
}
</style>
