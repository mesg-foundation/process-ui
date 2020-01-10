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
        x => x.instance === event.instanceHash && x.eventKey === event.eventKey
      )
    }
  },
  methods: {
    onChange(evt) {
      this.$emit('input', {
        key: 'event',
        event: {
          instanceHash: evt.instance,
          eventKey: evt.eventKey
        }
      })
    }
  }
}
</script>
