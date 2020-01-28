<template>
  <section class="connector">
    <div class="input">
      <label>My processes</label>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Link</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr v-for="process in processes" :key="process.name">
            <td>{{ process.name }}</td>
            <td>
              <a
                :href="`http://explorer.testnet.mest.com/processes/${process.hash}`"
                target="_blank"
              >{{ process.hash }}</a>
            </td>
            <td>
              <a @click="deleteProcess(process.hash)">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
      <a @click="logout">logout</a>
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      processes: []
    }
  },
  async mounted() {
    const snapshot = await this.$db.collection('processes').get()
    snapshot.forEach(x => this.processes.push(x.data()))
  },
  methods: {
    deleteProcess(hash) {
      // TODO
    },
    async logout() {
      await this.$auth.signOut()
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped>
.connector {
  padding: 40px;
  margin-top: 2em;
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

table {
  margin-bottom: 40px;
}
</style>
