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
  name: 'SystemHealthIndicatorUp',
  components: {
    SystemHealthIndicator,
  },
  computed: mapState({
    value: state => state.systemHealth.up,
  }),
  created() {
    this.label = 'Up'
    this.icon = 'check'
    this.color = 'white'
  },
}
</script>
