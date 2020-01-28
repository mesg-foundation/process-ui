<template>
  <div class="popup" v-if="value">
    <div class="back" @click="$emit('input', false)"></div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.back {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
}

.content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 800px;
  max-width: 100%;
  padding: 20px;
  box-shadow: 0 0px 8px 1px rgba(0, 0, 0, 0.2);
}
</style>
