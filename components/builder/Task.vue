<template>
  <Select :value="v" @input="onChange($event)" :options="tasks" label="Task to trigger" />
</template>

<script>
import Select from '~/components/Select'
export default {
  components: { Select },
  props: {
    tasks: {
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
      return this.tasks.find(
        x =>
          x.instance === this.value.instanceHash &&
          x.taskKey === this.value.taskKey
      )
    }
  },
  methods: {
    onChange(evt) {
      this.$emit('input', {
        key: 'task',
        task: {
          instanceHash: evt.instance,
          taskKey: evt.taskKey
        }
      })
    }
  }
}
</script>
