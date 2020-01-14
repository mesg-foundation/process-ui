<template>
  <div class="input">
    <label :for="`select-${id}`">{{ label }}</label>
    <select :id="`select-${id}`" :value="v" @input="onChange($event)" :placeholder="label">
      <option disabled>{{ label }}</option>
      <option v-for="(event, i) in options" :key="i" :value="i">{{ event.label || event.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      id: null
    }
  },
  computed: {
    v() {
      return this.options.findIndex(
        x => JSON.stringify(x) === JSON.stringify(this.value)
      )
    }
  },
  mounted() {
    this.id = this._uid
  },
  methods: {
    onChange(evt) {
      this.$emit('input', this.options[evt.target.value])
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  margin-bottom: 40px;
}

label {
  color: #0e061c;
  font-family: var(--font);
  font-size: 17px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.41;
  letter-spacing: normal;
  display: block;
  margin-bottom: 20px;
}

select {
  width: 100%;
  display: block;
  border: solid 1px rgb(var(--color-primary));
  border-radius: 3px;
  padding: 15px 44px 15px 17px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: var(--font);
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3c3940;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAABQCAYAAABmkUeGAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAWtJREFUaIHtzjtKA1EUh/HvjAFBcEviBqwUFNxGJo1gUAsRo0IaN+AqAhY2Plq3YZcm3RyLm0I0j7kzd7wp/l95H+f8QCmllFJKKaWUUkoppf5m5c3N7k7RewQ/wmw7N2hl7l+OX1+W5YMNb++eME5zm2Jy/KQAP8oNic3cDgtgmhsSnfm0cPw6tyMq9xlVNd56mUw+9l/fehh7uU1rc59VxsFlWb7b/MCGo/srjLPMtOXN0Vf9/jOA/bjYXPwvNPyEhwebh1+Aht/w8HBz8EvQsAgePuTHr0DDMnj4mA+/Bg2r4GHA/+NroGEdPAz6P3xNNNSBh4Hd4yPQUBceBneHj0RDDDwsSI9vgIZYeFiUDt8QDU3gYWF7fAs0NIWHxc3xLdHQBh4A8fgEaGgLD5D6+ERoSAGHeviEaEgFh9X4xGhICYfF+A7QkBo+73w0Oja3Q8ynVNX4YjD47GKPUkoppZRSSimllFKb3zfT5QQy9SFmsAAAAABJRU5ErkJggg==')
    no-repeat calc(100% - 20px) 50% #ffffff;
  background-size: 10px 20px;
}
</style>
