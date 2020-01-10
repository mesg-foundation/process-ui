<template>
  <div class="connector">
    <div class="input">
      <label for="name">Process's name</label>
      <input id="name" v-model="process.name" placeholder="My awesome process" />
    </div>

    <EventBuilder :events="events" v-model="process.event" />
    <TaskBuilder :tasks="tasks" v-model="process.task" />

    <Button>Deploy</Button>

    <output>{{ result }}</output>
  </div>
</template>

<script>
import Button from '~/components/Button'
import EventBuilder from '~/components/builder/Event'
import TaskBuilder from '~/components/builder/Task'
import { events, tasks } from '~/assets/connections.json'
export default {
  components: { Button, EventBuilder, TaskBuilder },
  data() {
    return {
      process: {
        name: '',
        event: {},
        task: []
      },
      events,
      tasks
    }
  },
  computed: {
    result() {
      return {
        name: this.process.name,
        nodes: [this.process.event, ...this.process.task].map((x, i) => ({
          ...x,
          key: x.key || `node-${i}`
        }))
      }
    }
  }
}
</script>

<style scoped>
.connector {
  margin-top: 2em;
  width: 90%;
  max-width: 50em;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
