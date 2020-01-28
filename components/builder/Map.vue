<template>
  <div class="input">
    <label>Inputs</label>
    <table>
      <thead>
        <tr>
          <th>Input</th>
          <th>Type</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="input in inputs" :key="input.key">
          <td>{{ input.name || key }}</td>
          <td>
            <code>{{ input.type }}</code>
          </td>
          <td>
            <input
              @input="onChange"
              v-if="input.type === 'String'"
              v-model="outputs[input.key]"
              :required="!input.optional"
              type="text"
            >
            <input
              @input="onChange"
              v-if="input.type === 'Number'"
              v-model="outputs[input.key]"
              :required="!input.optional"
              type="number"
            >
            <input
              @input="onChange"
              v-if="input.type === 'Boolean'"
              v-model="outputs[input.key]"
              :required="!input.optional"
              type="checkbox"
            >
            <input
              @input="onChange"
              v-if="input.type === 'Any'"
              v-model="outputs[input.key]"
              :required="!input.optional"
              type="string"
            >
            <Map
              @input="onChange"
              :data="eventData"
              :inputs="input.object"
              v-if="input.type === 'Object'"
              v-model="outputs[input.key]"
              :required="!input.optional"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { decode, encode } from '@mesg/api/lib/util/encoder'
export default {
  name: 'Map',
  props: {
    data: {
      type: Array,
      required: true
    },
    inputs: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    const decoded = this.value && this.value.outputs ? decode(this.value.outputs) : {}
    return {
      outputs: this.inputs.reduce(
        (prev, current) => ({
          ...prev,
          [current.key]: decoded[current.key]
        }),
        {}
      )
    }
  },
  methods: {
    onChange(evt) {
      this.$emit('input', {
        key: 'map',
        map: {
          outputs: encode(this.outputs)
        }
      })
    }
  }
}
</script>

<style scoped>
code {
  background: #f2f2f2;
  padding: 4px 10px;
  border-radius: 3px;
}
input {
  width: 100%;
  padding: 0.5em;
  border-radius: 3px;
  border: solid 1px #bdafd6;
}
</style>
