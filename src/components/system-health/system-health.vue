<template>
  <div class="system-health">
    <system-health-indicator-down class="system-health__indicator" />
    <system-health-indicator-paused class="system-health__indicator" />
    <system-health-indicator-up class="system-health__indicator" />
    <!-- Here should be some more indicators -->
    <!--
      Also we should decide which indicators to hide, when the screen gets too small
    -->
  </div>
</template>

<script>
import SystemHealthIndicatorUp from './system-health-indicator-up.vue'
import SystemHealthIndicatorPaused from './system-health-indicator-paused.vue'
import SystemHealthIndicatorDown from './system-health-indicator-down.vue'

export default {
  name: 'SystemHealth',
  components: {
    SystemHealthIndicatorDown,
    SystemHealthIndicatorPaused,
    SystemHealthIndicatorUp,
  },
}
</script>

<style scoped lang="scss">
.system-health {
  display: flex;
  align-items: center;
  height: 100%;
}

.system-health__indicator {
  margin: 0 0.2rem;
}
</style>
