<template>
  <div class="input">
    <label :for="`select-${id}`">{{ label }}</label>
    <select :id="`select-${id}`" :value="v" @input="onChange($event)">
      <option v-for="(event, i) in options" :key="i" :value="i">{{ event.label || event.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    value: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      id: null
    }
  },
  computed: {
    v() {
      return this.options.findIndex(
        x => JSON.stringify(x) === JSON.stringify(this.value)
      )
    }
  },
  mounted() {
    this.id = this._uid
  },
  methods: {
    onChange(evt) {
      this.$emit('input', this.options[evt.target.value])
    }
  }
}
</script>
