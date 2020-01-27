<template>
  <Select :value="v" @input="onChange($event)" :options="events" label="Event to connect" />
</template>

<script>
import Select from '~/components/Select'
export default {
  components: { Select },
  props: {
    events: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    v() {
      const event = this.value.event || {}
      return this.events.find(
        x =>
          x.value.event.instanceHash === event.instanceHash &&
          x.value.event.eventKey === event.eventKey
      )
    }
  },
  methods: {
    onChange(evt) {
      this.$emit('input', evt.value)
    }
  }
}
</script>
