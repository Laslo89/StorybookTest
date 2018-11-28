<template>
  <system-health-indicator
    :icon="icon"
    :label="label"
    :color="color"
    :value="value"
  />
</template>

<script>
import { mapState } from 'vuex'
import SystemHealthIndicator from './system-health-indicator.vue'

export default {
  name: 'SystemHealthIndicatorPaused',
  components: { SystemHealthIndicator },
  computed: mapState({
    value: state => state.systemHealth.paused,
  }),
  created() {
    this.label = 'Paused'
    this.color = 'white'
    this.icon = 'pause'
  },
}
</script>
