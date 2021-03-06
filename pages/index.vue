<template>
  <section class="connector">
    <EventBuilder :events="events" v-model="process.event" @input="eventChange" />
    <TaskBuilder :tasks="tasks" v-model="process.task" @input="taskChange" />
    <MapBuilder
      v-if="map.event && map.task"
      :data="map.event.data"
      :inputs="map.task.inputs"
      v-model="process.map"
    />
    <a @click="deploy" :disabled="!canPublish" class="btn" href="#">
      <i v-if="loading" class="fas fa-sync" />
      Deploy this process
    </a>
    <a @click="showCode = true" v-if="canPublish" href="#">Or deploy on my own node</a>

    <Popup v-model="showCode">
      <h4>
        Deploy on my own
        <a href="https://mesg.com/" target="_blank">MESG</a> Node
      </h4>
      <p>Open a terminal and type the following command:</p>
      <code>
        <pre>
npx mesg-cli daemon:start
npx mesg-cli process:create '{{ JSON.stringify(result) }}'
        </pre>
      </code>
    </Popup>
  </section>
</template>

<script>
import { encode } from '@mesg/api/lib/util/base58'
import EventBuilder from '~/components/builder/Event'
import TaskBuilder from '~/components/builder/Task'
import MapBuilder from '~/components/builder/Map'
import Popup from '~/components/Popup'
import login from '~/mixins/login'
import { events, tasks } from '~/assets/connections.json'
export default {
  components: { EventBuilder, TaskBuilder, MapBuilder, Popup },
  mixins: [login],
  data() {
    return {
      loading: false,
      showCode: false,
      process: {
        event: null,
        task: null,
        map: null
      },
      map: {
        task: null,
        event: null
      },
      events,
      tasks
    }
  },
  computed: {
    result() {
      const nodes = [this.process.event, this.process.map, this.process.task]
        .filter(x => x)
        .map((x, i) => ({
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
    canPublish() {
      return this.result.nodes.length >= 2
    }
  },
  methods: {
    async eventChange(event) {
      const service = await this.fetchServiceFromInstance(
        event.event.instanceHash
      )
      this.map.event = service.events.find(x => x.key === event.event.eventKey)
    },
    async taskChange(task) {
      const service = await this.fetchServiceFromInstance(
        task.task.instanceHash
      )
      this.map.task = service.tasks.find(x => x.key === task.task.taskKey)
    },
    async fetchServiceFromInstance(instanceHash) {
      const instance = await (
        await fetch(
          `http://explorer.testnet.mesg.com/api/instances/${instanceHash}`
        )
      ).json()
      const service = await (
        await fetch(
          `http://explorer.testnet.mesg.com/api/services/${encode(
            instance.serviceHash
          )}`
        )
      ).json()
      return service
    },
    async deploy() {
      if (!this.canPublish) {
        return
      }
      this.loading = true
      if (!this.$auth.currentUser) {
        await this.login(this.$auth)
      }
      await this.$db
        .collection('processes')
        .doc()
        .set(this.result)
      this.loading = false
    }
  }
}
</script>

<style scoped>
.connector {
  padding: 40px;
  width: 100%;
  max-width: 520px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.btn {
  margin-top: 80px;
  margin-bottom: 20px;
}
.btn .fa-sync {
  margin-right: 10px;
  animation: spin 4s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
