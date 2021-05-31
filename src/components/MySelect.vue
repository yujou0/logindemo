<template>
  <select v-model="selectedIndex">
    <option v-for="(x, i) in source" :value="i" :key="i">
      {{ x }}
    </option>
  </select>
</template>

<script>

let selectedIndex = {
  get: function() {
    return this.value;
  },
  set: function(v) {
    this.$emit('input', v)
  }
}

export default {
  name: 'MySelect',
  props: [
    'value',
    'source'
  ],
  computed: {
    selectedIndex,
  }
}
</script>