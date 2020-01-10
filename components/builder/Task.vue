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
      type: Array,
      default: () => []
    }
  },
  computed: {
    v() {
      const task = (this.value.find(x => x.type === 'task') || {}).task || {}
      return this.tasks.find(
        x => x.instance === task.instanceHash && x.taskKey === task.taskKey
      )
    }
  },
  methods: {
    onChange(evt) {
      this.$emit('input', [
        {
          key: 'task',
          task: {
            instanceHash: evt.instance,
            taskKey: evt.taskKey
          }
        }
      ])
    }
  }
}
</script>
