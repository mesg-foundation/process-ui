<template>
  <div>
    <nuxt-link to="/account">
      <i class="far fa-user-circle" />
    </nuxt-link>
    <div id="signin-ui"></div>
  </div>
</template>

<style scoped>
a {
  margin: 40px;
  font-size: 34px;
  display: inline-block;
}
</style>

<style>
#signin-ui .firebaseui-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.2);
}
</style>
