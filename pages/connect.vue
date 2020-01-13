<template>
  <div class="connector">
    <EventBuilder :events="events" v-model="process.event" @input="eventChange" />
    <TaskBuilder :tasks="tasks" v-model="process.task" @input="taskChange" />
    <MapBuilder
      v-if="map.event && map.task"
      :data="map.event.data"
      :inputs="map.task.inputs"
      v-model="process.map"
      @input="mapChange"
    />
    <hr>
    <a @click="deploy = true" class="btn" href="#">Generate command</a>

    <textarea v-if="deploy" :value="command" />
  </div>
</template>

<script>
import { encode } from '@mesg/api/lib/util/base58'
import EventBuilder from '~/components/builder/Event'
import TaskBuilder from '~/components/builder/Task'
import MapBuilder from '~/components/builder/Map'
import { events, tasks } from '~/assets/connections.json'
export default {
  components: { EventBuilder, TaskBuilder, MapBuilder },
  data() {
    return {
      process: {
        event: {},
        task: {},
        map: {}
      },
      map: {
        task: null,
        event: null
      },
      events,
      tasks,
      deploy: false
    }
  },
  computed: {
    result() {
      const nodes = [
        this.process.event,
        this.process.map,
        this.process.task
      ].map((x, i) => ({
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
      return `npx mesg-cli daemon:start && npx mesg-cli process:create '${JSON.stringify(this.result)}'`
    }
  },
  methods: {
    resetResult() {
      this.deploy = false
    },
    mapChange() {
      this.resetResult()
    },
    async eventChange(event) {
      this.resetResult()
      this.map.event = null
      const service = await this.fetchServiceFromInstance(
        event.event.instanceHash
      )
      this.map.event = service.events.find(x => x.key === event.event.eventKey)
    },
    async taskChange(task) {
      this.resetResult()
      this.map.task = null
      const service = await this.fetchServiceFromInstance(
        task.task.instanceHash
      )
      this.map.task = service.tasks.find(x => x.key === task.task.taskKey)
    },
    async fetchServiceFromInstance(instanceHash) {
      const instance = await (await fetch(
        `http://explorer.testnet.mesg.com/api/instances/${instanceHash}`
      )).json()
      const service = await (await fetch(
        `http://explorer.testnet.mesg.com/api/services/${encode(
          instance.serviceHash
        )}`
      )).json()
      return service
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
