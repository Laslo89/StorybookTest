<template>
  <system-health-indicator
    :label="label"
    :color="color"
    :value="value"
    :icon="icon"
  />
</template>

<script>
import { mapState } from 'vuex'
import SystemHealthIndicator from './system-health-indicator.vue'

export default {
  name: 'SystemHealthIndicatorDown',
  components: {
    SystemHealthIndicator,
  },
  computed: mapState({
    value: state => state.systemHealth.down,
  }),
  created() {
    this.label = 'Down'
    this.icon = 'error'
    this.color = 'white'
  },
}
</script>
