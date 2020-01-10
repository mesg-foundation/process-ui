<template>
  <div class="connector">
    <EventBuilder :events="events" v-model="process.event" @input="deploy = false" />
    <TaskBuilder :tasks="tasks" v-model="process.task" @input="deploy = false" />

    <a class="btn" href="#" @click="deploy = true">Generate command</a>

    <textarea v-if="deploy" :value="command" />
  </div>
</template>

<script>
import EventBuilder from '~/components/builder/Event'
import TaskBuilder from '~/components/builder/Task'
import { events, tasks } from '~/assets/connections.json'
export default {
  components: { EventBuilder, TaskBuilder },
  data() {
    return {
      process: {
        event: {},
        task: []
      },
      events,
      tasks,
      deploy: false
    }
  },
  computed: {
    result() {
      const nodes = [this.process.event, ...this.process.task].map((x, i) => ({
        ...x,
        key: x.key || `node-${i}`
      }))
      const edges = []
      for (let i = 1; i < nodes.length; i++) {
        edges.push({ src: nodes[i - 1].key, dst: nodes[i].key })
      }
      return {
        name: new Date().toISOString(),
        nodes,
        edges
      }
    },
    command() {
      return `npx mesg-cli process:create '${JSON.stringify(this.result)}'`
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

textarea {
  margin-top: 2em;
  font-size: 1.5em;
  width: 100%;
  height: 200px;
}
</style>
