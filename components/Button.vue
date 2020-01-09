<template>
  <nuxt-link v-if="to" :to="to" class="btn">
    <slot />
  </nuxt-link>
  <a v-else :href="href" class="btn" target="_blank">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    to: { type: String, default: '/' },
    href: { type: String, default: '/' }
  }
}
</script>

<style scoped>
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
